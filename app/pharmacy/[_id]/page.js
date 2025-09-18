import PharmacyProfile from '@/components/Pharmacy/PharmacyProfile'
import { connect } from '@/models/mongodb'
import User from '@/models/user.model'
import React from 'react'

const page =async ({params}) => {
  
  await connect()
  const user = await User.findOne({_id:params?._id})

  return (
    <PharmacyProfile user={user} />
  )
}

export default page