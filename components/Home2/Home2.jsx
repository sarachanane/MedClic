"use client"

import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion"

import Guid1 from '../Guids/Guid1'
import Guid2 from '../Guids/Guid2';
import Guid3 from '../Guids/Guid3';
import Guid4 from '../Guids/Guid4';
import Guid5 from '../Guids/Guid5';
import Guid6 from '../Guids/Guid6';
import Link from 'next/link';
import UserMenu from '../UserMenu';
import { useSession } from 'next-auth/react';
import { GlobalContext } from '@/context/GlobalContext';
import { useEffect } from 'react';
import { useContext } from 'react';
import CreateFreeCom from './CreateFreeCom';
import { Button } from '@nextui-org/react';
import RoutePharms from './routePharms';

const Home2 = ({}) => {
    const [order, setOrder] = useState(0);
    const { data: session, update } = useSession()
    const { user, setUser } = useContext(GlobalContext);
    useEffect(() => {
        setUser(session?.user);
        console.log("session?.user : ", session?.user);

    }, [session])
    return (
        <div className={"w-full flex flex-col items-center  "} >
            <div className=" w-full flex justify-end">
                <UserMenu />
            </div>
            <div className=' w-screen h-screen flex flex-col  pt-16 px-6'>
                <a href='/dashboard/freecom/accepted' className=' text-6xl text-yellow-400'><i class="ri-notification-2-fill "></i></a>
                <h1 className='text-4xl font-bold mt-12'>recherche</h1>
                <div className='w-full h-40 flex flex-col justify-end'>
                    <CreateFreeCom user={user} />
                    <RoutePharms />
                

                </div>

            </div>
        </div>
    )
}

export default Home2