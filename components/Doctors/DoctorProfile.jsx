"use client"


import Image from 'next/image'
import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import Apointment from './Apointment'
import Payment from './Payment'
import Chat from './Chat'

const DoctorProfile = ({ user:gUser, products }) => {
    const [section, setSection] = useState("profile")
    const [user, setUser] = useState(gUser)



    return (
        <div className='relative w-screen min-h-[120vh] flex flex-col  items-center pt-6 pb-20 overflow-x-hidden'>
            <h1 className='text-xl font-bold'>Pharmacy</h1>
            <ProfileCard user={user} />
            {
                section == "profile" ?
                    <Apointment setUser={setUser} products={products} user={user} setSection={setSection} />
                    : section == "payment" ?
                        <Payment />
                        :
                        null

            }

        </div>
    )
}

export default DoctorProfile