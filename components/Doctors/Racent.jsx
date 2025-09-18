import Image from 'next/image'
import React from 'react'

const Racent = () => {
    return (
        <>
            <div className='w-full ms-16 mt-6 font-bold'>Your Recent Doctors</div>
            <div className='w-4/5 flex gap-3 overflow-x-scroll hide-scrollbar justify-between mt-4'>
                <div className=' flex flex-col items-center'>
                    <Image src={"/images/p1.svg"} width={100} height={100} className='w-12 h-12 rounded-full' />
                    <span className='text-xs '>Dr. Marcus</span>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src={"/images/p4.svg"} width={100} height={100} className='w-12 h-12 rounded-full' />
                    <span className='text-xs '>Dr. Maria</span>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src={"/images/p3.svg"} width={100} height={100} className='w-12 h-12 rounded-full' />
                    <span className='text-xs '>Dr. Stevi</span>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src={"/images/p4.svg"} width={100} height={100} className='w-12 h-12 rounded-full' />
                    <span className='text-xs '>Dr. Luke</span>
                </div>


            </div>
        </>
    )
}

export default Racent