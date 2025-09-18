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
import CreateMed from './CreateMed';
import CreateExchange from './CreateExchange';

const Home = () => {
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
            <img src={user?.type == "user" ? "/images/ph4.png" : "/images/ph3.png"} className="w-3/4 h-40" />
            <div className=' w-screen h-screen flex flex-col items-center pt-16 px-6'>
                {user?.type == "user" ?
                    <>

                        <div className='w-full flex gap-6 justify-evenly'>
                            <div className='w-2/5 h-40 bg-cover flex flex-col gap-2 justify-center items-center pb-4 rounded-2xl bg-blue-200'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/icons/icon1.png" className="w-12 h-12" />
                                </div>
                                <Link href='/dashboard/orders' className='w-4/5  text-xs  text-center  text-black py-2  flex justify-center rounded-full  font-semibold ' >Command</Link>
                            </div>
                            <div className='w-2/5 h-40 bg-cover flex flex-col gap-2 justify-center items-center pb-4 rounded-2xl bg-blue-200'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/icons/icon2.png" className="w-12 h-12" />
                                </div>
                                <Link href='/dashboard/home' className='w-4/5  text-xs  text-center  text-black py-2  flex justify-center rounded-full  font-semibold ' >Fournitures médicales</Link>
                            </div>
                        </div>
                        <div className='w-full flex gap-4 mt-6 justify-evenly'>
                            <div className='w-2/5 h-40 bg-cover flex flex-col gap-2 justify-center items-center pb-4 rounded-2xl bg-blue-200'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/icons/icon3.png" className="w-12 h-12" />
                                </div>
                                <Link href='/dashboard/products' className='w-4/5  text-xs  text-center  text-black py-2  flex justify-center rounded-full  font-semibold ' >Soins de la peau et du corps</Link>
                            </div>
                            <div className='w-2/5 h-40 bg-cover flex flex-col gap-2 justify-center items-center pb-4 rounded-2xl bg-blue-200'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/icons/icon4.png" className="w-12 h-12" />
                                </div>
                                <Link href='/dashboard/products' className='w-4/5  text-xs  text-center  text-black py-2  flex justify-center rounded-full  font-semibold ' >mère et l'enfant</Link>
                            </div>
                        </div>
                        <div className='w-full flex gap-4 mt-6 justify-evenly'>
                            <div className='w-2/5 h-40 bg-cover flex flex-col gap-2 justify-center items-center pb-4 rounded-2xl bg-blue-200'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/icons/icon5.png" className="w-12 h-12" />
                                </div>
                                <Link href='/dashboard/products' className='w-4/5  text-xs  text-center  text-black py-2  flex justify-center rounded-full  font-semibold ' >Soins quotidiens</Link>
                            </div>
                            <div className='w-2/5 h-40 bg-cover flex flex-col gap-2 justify-center items-center pb-4 rounded-2xl bg-blue-200'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/icons/icon6.png" className="w-12 h-12" />
                                </div>
                                <Link href='/dashboard/products' className='w-4/5  text-xs  text-center  text-black py-2  flex justify-center rounded-full  font-semibold ' >paramedique</Link>
                            </div>
                        </div>
                        <div className='w-5/6 h-40 bg-cover mt-6 flex flex-col gap-2 justify-center items-center pb-4 rounded-2xl bg-blue-200'>
                            <div className='p-1 rounded-full bg-white'>
                                <img src="/icons/icon7.png" className="w-12 h-12" />
                            </div>
                            <Link href='/dashboard/products' className='w-4/5  text-xs  text-center  text-black py-2  flex justify-center rounded-full  font-semibold ' >médicaments</Link>
                        </div>
                    </>
                    :
                    <>
                        <div className='w-full flex gap-4 justify-between'>
                            <div className='w-3/5 h-52 bg-cover flex flex-col gap-4 justify-center items-center pb-4 rounded-lg bg-blue-400'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/images/icon1.png" className="w-12 h-12" />
                                </div>
                                {/* <Link href='/dashboard/home' className='w-4/5  text-sm  text-center  bg-white py-2  flex justify-center rounded-full  font-semibold text-blue-400' >Publier des reductions</Link> */}
                                <CreateMed user={user} visit={"reductions"} type={"reduction"} path={"reductions"} title={'publier une reduction'} />
                            </div>
                            <div className='w-3/5 h-52 bg-cover flex flex-col gap-4 justify-center items-center pb-4 rounded-lg bg-blue-400'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/images/icon2.png" className="w-12 h-12" />
                                </div>
                                <Link href='dashboard/commands' className='w-4/5  text-sm  text-center  bg-white py-2  flex justify-center rounded-full  font-semibold text-blue-400' >Commands</Link>
                            </div>
                        </div>
                        <div className='w-full flex  justify-center mt-4'>
                            <div className='w-4/5 h-32 px-6 bg-cover flex flex-row gap-4 justify-center items-center pb-4 rounded-lg bg-blue-400'>
                                <CreateMed visit={"produits"} user={user} type={"product"} title={'publier un produit'} />
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/images/icon2.png" className="w-12 h-12" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex gap-4 justify-between mt-4'>
                            <div className='w-3/5 h-52 bg-cover flex flex-col gap-4 justify-center items-center pb-4 rounded-lg bg-blue-400'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/images/icon3.png" className="w-12 h-12" />
                                </div>
                                <CreateExchange user={user} />
                            </div>
                            <div className='w-3/5 h-52 bg-cover flex flex-col gap-4 justify-center items-center pb-4 rounded-lg bg-blue-400'>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/images/icon4.png" className="w-12 h-12" />
                                </div>
                                <Link href='/dashboard/exchange' className='w-4/5  text-sm  text-center  bg-white py-2  flex justify-center rounded-full  font-semibold text-blue-400' >consulter les échanges</Link>
                            </div>
                        </div>
                        {/* <div className='w-full flex  justify-center mt-4'>
                            <div className='w-4/5 h-32 px-6 bg-cover flex flex-row gap-4 justify-center items-center pb-4 rounded-lg bg-blue-400'>
                                <Link href='/dashboard/paniers' className='w-4/5  text-sm  text-center  bg-white py-2  flex justify-center rounded-full  font-semibold text-blue-400' >consulter les paniers</Link>
                                <div className='p-1 rounded-full bg-white'>
                                    <img src="/images/icon2.png" className="w-12 h-12" />
                                </div>
                            </div>
                        </div> */}
                    </>
                }

            </div>
        </div>
    )
}

export default Home