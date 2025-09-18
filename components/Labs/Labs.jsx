"use client"


import Image from 'next/image'
import React, { useState } from 'react'
import Payment from './Payments';

const Labs = () => {
    const [section, setSection] = useState("labs");
    return (
        <div className='w-screen h-screen '>
            {
                section == "labs" ?
                    <div className='w-full h-full flex flex-col  items-center  pt-20 px-12'>
                        <Image src={"/images/taleb.svg"} width={1000} height={1000} className='w-full h-40' />
                        <div className='w-full flex justify-between items-center'>
                            <div className='w-5/12 h-32 bg-primary-1 rounded-xl flex justify-center items-center'>
                                <p className='font-bold text-center'>Analysis Laboratory TaLeb </p>
                            </div>
                            <Image src={"/images/ehp.svg"} width={1000} height={1000} className='w-5/12 h-40' />
                        </div>
                        <div onClick={()=>{setSection("payments")}} className='w-full h-24 bg-primary-1 rounded-xl flex justify-center items-center'>
                            <p className='font-bold text-center'>Analysis Laboratory CHIALI </p>
                        </div>
                    </div>
                    : 
                    <Payment />
        }



        </div>
    )
}

export default Labs