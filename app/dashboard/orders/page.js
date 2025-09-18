
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Commands from '@/components/Commands/Commands'
import Orders from '@/components/Orders/Orders'
import Command from '@/models/command.model'
import { connect } from '@/models/mongodb'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
    const session = await getServerSession(authOptions);
    await connect()
    const commands = await Command.aggregate([
        {
            $match: {
                idUser: new mongoose.Types.ObjectId(session?.user?._id),
                idPharmacy: { $exists: true,$ne: null }
            },
        },
        {
            $lookup: {
                from: "users", // Collection for user data
                localField: "idUser",
                foreignField: "_id",
                as: "user",
            },
        },
        {
            $lookup: {
                from: "users", // Collection for pharmacy data
                localField: "idPharmacy",
                foreignField: "_id",
                as: "pharmacy",
            },
        },
        {
            $unwind: { path: "$user", preserveNullAndEmptyArrays: true }, // Convert user array to object
        },
        {
            $unwind: { path: "$pharmacy", preserveNullAndEmptyArrays: true }, // Convert pharmacy array to object
        },
    ]);

    console.log("commands : commands : ", commands);


    return (
        <Orders commands={commands} />
    )
}

export default page