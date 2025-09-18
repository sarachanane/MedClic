
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Commands from '@/components/Commands/Commands'
import FreeCom from '@/components/FreeCom/FreeCom'
import Orders from '@/components/Orders/Orders'
import Command from '@/models/command.model'
import { connect } from '@/models/mongodb'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
  const session = await getServerSession(authOptions);
  await connect()
  let matchQuery = {
    $or: [{ idPharmacy: { $exists: false } }, { idPharmacy: null }],
  };

  // Modify match query for user type
  if (session?.user?.type === "user") {
    matchQuery.idUser = new mongoose.Types.ObjectId(session.user._id);
  }

  // const commands = await Command.aggregate([
  //   { $match: matchQuery },
  //   {
  //     $lookup: {
  //       from: "users",
  //       localField: "idUser",
  //       foreignField: "_id",
  //       as: "user",
  //     },
  //   },
  //   {
  //     $unwind: { path: "$user", preserveNullAndEmptyArrays: true },
  //   },
  // ]);

  const commands = await Command.find({idUser:session?.user?._id,idPharmacy: { $exists: true }}).populate("idPharmacy")
  console.log("commands : commands : ", commands);

  return (
    <FreeCom commands={JSON.stringify(commands)} currentUser={session?.user} />
  )
}

export default page