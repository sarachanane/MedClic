"use server"

import { connect } from "@/models/mongodb";
import Panier from "@/models/panier.model";
import { revalidatePath } from "next/cache";
import { uploadImageToNodejs } from "./image.action";



export async function addPanier(data) {
    try {
        await connect()
        console.log("data : data :",data);
        const result = await Panier.create(data)
        console.log("result :",result);
        return { success: true, status: 201 };
    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}


export async function deleteMongoPanier(_id) {
    try {
        await connect()
        const result = await Panier.findByIdAndDelete(_id)
        console.log("result :", result);
        revalidatePath("/dashboard/panier")
        revalidatePath("/dashboard/panier/mine")
        return { success: true, status: 200 };
    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}

