import Calender from '@/components/Calender/Calender'
import { connect } from '@/models/mongodb'
import User from '@/models/user.model'
import React from 'react'

const page = async () => {

  await connect()
  const pharmacies = await User.find({type:"pharmacy"})
  
  return (
    <Calender pharmacies={pharmacies} />
  )
}

export default page