"use server"

import { createMongoUser, getMongoUser, getMongoUsers, updateMongoUserDataKey, updateMongoUsers } from "@/controlers/user.controler";
import Command from "@/models/command.model";
import { connect } from "@/models/mongodb";
import User from "@/models/user.model";
import { revalidatePath } from "next/cache";


export async function createUser(data) {
    try {
        await connect()
        console.log("data : data :",data);
        const result = await User.create(data)
        console.log("result :",result);
        return { success: true, status: 201 };

    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}
export async function UpdateUserDataKey(_id, data, path) {
    try {
        const result = await User.updateOne({ _id }, data)
        if (result?.success) {
            revalidatePath("/dashboard/profile", "page")
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

export async function UpdateUser(condition, data) {
    try {
        const result = await User.updateOne(condition, { $set: data })
        revalidatePath("/dashboard/profile", "page")

    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}

export async function UpdateUsers(condition, data) {
    try {
        const result = await updateMongoUsers(condition, data)
        if (result?.success) {
            revalidatePath("/dashboard/profile", "page")
            // revalidatePath("/dashboard/doctor/[_id]", "page")
            return { success: true, status: 200 };
        } else {
            return { success: false, status: 404, error: clerkUserResult?.error, msg: clerkUserResult?.msg };
        }
    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}



export async function UpdateAllUserData(clerkId, data) {
    try {
        const result2 = await updateClerkUser(clerkId, data)
        const result = await updateMongoUserDataKey({ clerkId }, data)
        revalidatePath("/dashboard/profile", "page")
        revalidatePath("/dashboard/member/[_id]", "page")
        if (result?.success) {
            return { success: true, status: 200 };
        } else {
            return { success: false, status: 500 };
        }
    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}
export async function GetUsersWithCondition(condition) {
    try {

        const result = await getMongoUsers(condition)

        return { success: true, status: 200, users: result?.users };
    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}
export async function GetUserWithCondition(condition) {
    try {

        const result = await getMongoUser(condition)

        return { success: true, status: 200, user: result?.user };
    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}


