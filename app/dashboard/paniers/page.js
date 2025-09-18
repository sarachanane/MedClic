import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import DoctorProfile from '@/components/Doctors/DoctorProfile'
import Paniers from '@/components/Paniers/Paniers';
import Products from '@/components/Products/Products';
import { connect } from '@/models/mongodb';
import Panier from '@/models/panier.model';
import Product from '@/models/product.model';
import { getServerSession } from 'next-auth';
import React from 'react'

const page =async () => {
  const session = await getServerSession(authOptions);
  await connect()
  const paniers = await Panier.find({idPharmacy:session?.user?._id}).populate('idUser').populate("products").lean()
  return (
    <Paniers user={session?.user} data={paniers} />
  )
}

export default page