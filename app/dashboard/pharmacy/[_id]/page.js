import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import PharmacyProfile from '@/components/Pharmacy/PharmacyProfile'
import { connect } from '@/models/mongodb'
import Product from '@/models/product.model'
import User from '@/models/user.model'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  await connect()
  const user = await User.findOne({ _id: params?._id })
  const products = await Product.find({ idPharmacy: params?._id })
  const myProducts = await Product.find({ idPharmacy: session?.user?._id })

  return (
    <PharmacyProfile user={user} myProducts={myProducts} currentUser={session?.user} products={products} />
  )
}

export default page