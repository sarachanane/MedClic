import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Commands from '@/components/Commands/Commands'
import Command from '@/models/command.model'
import { connect } from '@/models/mongodb'
import Panier from '@/models/panier.model'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions);
  await connect()
  const paniers = await Panier.find({idPharmacy:session?.user?._id}).populate('idUser')
  const commands = await Command.aggregate([
    // {
    //   $match: {
    //     idPharmacy: new mongoose.Types.ObjectId(session?.user?._id),
    //   },
    // },
    {
      $lookup: {
        from: "users", 
        localField: "idUser",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $lookup: {
        from: "users",
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

  return (
    <>
    <Commands paniers={JSON.stringify(paniers)} user={session?.user} commands={JSON.stringify(commands)} />
    </>
  )
}

export default page