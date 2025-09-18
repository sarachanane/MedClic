import Home from '@/components/Home/Home'
import Home2 from '@/components/Home2/Home2'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';


const page = async () => {
  const session = await getServerSession(authOptions);
  return ( 
    <Home2 user={session?.user} />
  )
}

export default page