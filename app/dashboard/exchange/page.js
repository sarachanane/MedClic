import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ExchangeCom from '@/components/Exchange/ExchangeCom';
import Exchange from '@/models/exchange.model';
import { connect } from '@/models/mongodb';
import { getServerSession } from 'next-auth';
import React from 'react'

const page = async() => {
  const session = await getServerSession(authOptions);
  await connect()
  const exchanges = await Exchange.find({}) 
  .populate('idUser')
  .populate('idPharmacy') 
  .populate('toOffer') 
  .populate('toGet')

  console.log("exchanges : ",exchanges);

  return (
    <ExchangeCom exchanges={JSON.stringify(exchanges)} />
  )
}

export default page