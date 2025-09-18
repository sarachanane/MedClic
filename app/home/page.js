import Home from '@/components/Home/Home'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


const page = async () => {

    const session = await getServerSession(authOptions);
    console.log("the sess",session);
    if ( session?.user?.type == "user") redirect( "/home2");
  
  return (
    <Home />
  )
}

export default page