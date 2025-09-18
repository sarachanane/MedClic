"use server"

import { connect } from "@/models/mongodb";
import Command from "@/models/command.model";
import { revalidatePath } from "next/cache";
import { uploadImageToNodejs } from "./image.action";
import User from "@/models/user.model";
import mongoose from "mongoose";




export const CreateCom = async (formData) => {
    if (!formData) {
        return {
            success: false,
            status: 400,
            msg: "Validation error. Check the provided data.",
        };
    }

    try {
        await connect()
        const description = formData.get('description');
        const medName = formData.get('medName');
        const idPharmacy = formData.get('idPharmacy');
        const idUser = formData.get('idUser');
        const imageFile = formData.get('image'); // assuming input name="image"

        if (!idUser) {
            throw new Error('User ID is required.');
        }

        let imageUrl = null;
        let base64Placeholder = null;

        // Only upload if an image is provided
        if (imageFile && typeof imageFile === 'object' && imageFile.size > 0) {
            const uploadResult = await uploadImageToNodejs(formData, "/medications");
            imageUrl = uploadResult.imageUrl;
            base64Placeholder = uploadResult.base64Placeholder;
        }

        const result = await Command.create({
            description,
            idUser,
            idPharmacy,
            imageUrl,
            base64Placeholder,
            status: "pending",
            data: { medName },
        });

        revalidatePath("/dashboard/commands");

        return {
            success: true,
            status: 201,
            result,
            msg: "Command created successfully!",
        };

    } catch (error) {
        console.error("Error creating Command:", error);
        if (error.code === 11000) {
            return {
                success: false,
                status: 409,
                msg: "Command with this name already exists!",
                error: error.message,
            };
        }
        if (error.name === "ValidationError") {
            return {
                success: false,
                status: 400,
                msg: "Validation error. Check the provided data.",
                error: error.message,
            };
        }
        return {
            success: false,
            status: 500,
            msg: "Server error. Please try again later.",
            error: error.message,
        };
    }
};




export async function updateMongoCommand(condition,data) {
    try {
        await connect()
        console.log("data : data :", data);
        const result = await Command.updateOne(condition, {$set:data})
        revalidatePath("/dashboard/commands")
        revalidatePath("/dashboard/freecom")
        return { success: true, status: 200};

    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}

export const RefuseCom = async (idCommand, idPharmacy) => {
    if (!idCommand || !idPharmacy) {
        return {
            success: false,
            status: 400,
            msg: "Validation error. Check the provided data.",
        };
    }

    try {
        await connect();

        const command = await Command.findById(idCommand);
        if (!command) {
            return {
                success: false,
                status: 404,
                msg: "Command not found.",
            };
        }

        // Add current pharmacy to refuses list
        command.refuses = [...(command?.refuses || []), new mongoose.Types.ObjectId(idPharmacy)];

        // Get user info and location
        const user = await User.findById(idPharmacy);
        if (!user || !user?.data?.long_lat) {
            return {
                success: false,
                status: 404,
                msg: "User not found or missing geolocation.",
            };
        }

        const [userLng, userLat] = user?.data?.long_lat;

        // Find closest pharmacy not in refuses list
        const pharmacies = await User.find({
            type: "pharmacy",
            _id: { $nin: command?.refuses },
            "data.long_lat": { $exists: true },
        });

        // Manual nearest pharmacy calculation
        let closest = null;
        let minDist = Infinity;

        pharmacies.forEach(pharmacy => {
            const [lng, lat] = pharmacy?.data?.long_lat;
            const dist = getDistanceFromLatLonInKm(userLat, userLng, lat, lng);
            if (dist < minDist) {
                minDist = dist;
                closest = pharmacy;
            }
        });

        if (closest) {
            command.idPharmacy = closest._id;
        } else {
            command.idPharmacy = null;
        }

        await command.save();
        revalidatePath("/dashboard/freecom");
        revalidatePath("/dashboard/orders");
        revalidatePath("/dashboard/commands");

        return {
            success: true,
            status: 200,
            result: command,
            msg: closest
                ? "Command reassigned to closest pharmacy."
                : "No nearby pharmacy found. Pharmacy removed from command.",
        };
    } catch (error) {
        return {
            success: false,
            status: 500,
            msg: "Server error. Please try again later.",
            error: error.message,
        };
    }
};

// Helper: Haversine formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius (km)
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}




export async function UpdateCommandDataKey(_id, data, path) {
    try {
        const result = await Command.updateOne({ _id }, data)
        if (result?.success) {
            revalidatePath("/dashboard/commands", "page")
            if (path) {
                revalidatePath(path, "page")
            }
            return { success: true, status: 200 };
        } else {
            return { success: false, status: 404 };
        }
    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}


function deg2rad(deg) {
    return deg * (Math.PI / 180);
}


