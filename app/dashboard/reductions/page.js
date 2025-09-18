
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Commands from '@/components/Commands/Commands'
import FreeCom from '@/components/FreeCom/FreeCom'
import Reductions from '@/components/Home/Reductions'
import Orders from '@/components/Orders/Orders'
import Command from '@/models/command.model'
import { connect } from '@/models/mongodb'
import Product from '@/models/product.model'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {
 const session = await getServerSession(authOptions);
  await connect()
  const products = await Product.find({type:"reduction"}).populate('idPharmacy').lean()

  return (
    <Reductions products={products} currentUser={session?.user} />
  )
}

export default page