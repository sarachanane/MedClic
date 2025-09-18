import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import DoctorProfile from '@/components/Doctors/DoctorProfile'
import { connect } from '@/models/mongodb';
import Product from '@/models/product.model';
import { getServerSession } from 'next-auth';
import React from 'react'

const page =async () => {
  const session = await getServerSession(authOptions);
  await connect()
  const products = await Product.find({idPharmacy:session?.user?._id})
  return (
    <DoctorProfile user={session?.user} products={products} />
  )
}

export default page