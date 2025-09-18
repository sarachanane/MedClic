import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Pharmacy = () => {
    return (
        <div className='w-screen h-screen pt-12'>

            <div className='w-full flex flex-col items-center px-20'>
                <Image src={"/images/ph1.svg"} width={1000} height={1000} className='w-44 h-44 rounded-xl' />
                <Link href={"/pharmacy/flsdlkf"} className='w-full py-4 bg-primary-1 rounded-xl text-center font-bold'><span>Rerbal pharmaci Cite Adim Fatiha Sidi bel abbes</span></Link>
            </div>
            <div className='w-full flex flex-col items-center mt-8 px-20'>
                <Image src={"/images/ph2.svg"} width={1000} height={1000} className='w-44 h-44 rounded-xl' />
                <Link href={"/pharmacy/flsdlkf"} className='w-full bg-primary-1 py-4 px-2 rounded-xl text-center font-bold'><span>Mansour wafaa pharmaci sidi djellali sidi bel abbes</span></Link>
            </div>

        </div>
    )
}

export default Pharmacy