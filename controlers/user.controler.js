"use server"

import { connect } from "@/models/mongodb";
import User from "@/models/user.model";

export async function getMongoUser(identifier) {
    try {
        await connect();
        const user = await User.findOne(identifier)
        return { success: true, user };
    } catch (error) {
        console.error("Error creating Clerk user:", error);
        return { success: false, msg: "Failed to create Clerk user. " + error.message };
    }
}
export async function getMongoUsers(identifier) {
    try {
        await connect();
        const users = await User.find(identifier)
        return { success: true, users };
    } catch (error) {
        console.error("Error creating Clerk user:", error);
        return { success: false, msg: "Failed to create Clerk user. " + error.message };
    }
}

export async function createMongoUser(data) {
    try {
        await connect();
        const result = await User.create(data);
        return { success: true, user: result };
    } catch (error) {
        console.error("Error creating MongoDB user:", error); // Log the error for debugging

        if (error.code === 11000) {
            return { success: false, status: 11000, msg: "Duplicate entry detected. This data already exists." };
        } else if (error.name === 'ValidationError') {
            return { success: false, msg: "Validation failed. Please check your input data." };
        } else if (error.name === 'MongoNetworkError') {
            return { success: false, msg: "Failed to connect to the database. Please try again later." };
        } else {
            return { success: false, msg: "An unknown error occurred. " + error.message };
        }
    }
}



export async function updateMongoUser(identifier, data) {
    try {
        await connect(); // Ensure database connection
        const user = await User.updateOne(identifier, data);
        if (user.nModified === 0) {
            throw new Error(`No user found with ID: ${_id} or no changes made`);
        }
        return { success: true, user };
    } catch (error) {
        console.error(`Error updating user with ID: ${_id}`, error);
        return { success: false, msg: error.message };
    }
}

export async function updateMongoUsers(identifier, data) {
    try {
        await connect(); // Ensure database connection
        const user = await User.updateMany(identifier, {$set:data});
        if (user.nModified === 0) {
            throw new Error(`No user found with ID: ${_id} or no changes made`);
        }
        return { success: true}
    } catch (error) {
        console.error(`Error updating user with ID: ${_id}`, error);
        return { success: false, msg: error.message };
    }
}

export async function updateMongoUserDataKey(identifier, data) {
    try {
        await connect(); // Ensure database connection
        const user = await User.updateOne(identifier, {$set:data});
        if (user.nModified === 0) {
            throw new Error(`No user found with ID: ${_id} or no changes made`);
        }
        return { success: true, user };
    } catch (error) {
        console.error(`Error updating user with ID: ${_id}`, error);
        return { success: false, msg: error.message };
    }
}




export async function DeleteMongoUserWithClerkid(clerkId) {
    try {
        await connect();
        const result = await User.deleteOne({ clerkId });
        return { success: true, };
    } catch (error) {
        console.error("Error creating MongoDB user:", error); // Log the error for debugging
        return { success: false, msg: "An unknown error occurred. " + error.message };

    }
}




