import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Guid3 = ({ setOrder }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 85 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.1, x: -85 }}
            className=' w-screen h-screen flex flex-col items-center'>
            <Image src={"/images/logo.png"} width={100} height={100} className='w-3/5 md:w-1/5 h-30 ' />
            <Image src={"/images/home3.svg"} width={100} height={100} className='w-4/5 h-40 ' />
            <button className='w-3/5 h-24  mt-12 text-xl bg-primary-1 py-3 flex justify-center items-center rounded-3xl font-semibold' >Doctor At Your Home</button>
            <div className='w-full flex justify-between items-center mt-4 px-8'>
                <div className='flex'>
                    <div className='w-4 h-2 bg-primary-1 rounded  opacity-50'></div>
                    <div className='w-4 h-2 bg-primary-1 rounded ms-1 '></div>
                    <div className='w-4 h-2 bg-primary-1 rounded ms-1 opacity-50'></div>

                </div>
                <button onClick={(e) => { setOrder((prevOrder) => prevOrder + 1) }} className='text-white rounded-full bg-primary-1 px-4 py-3 text-2xl'><i class="ri-arrow-right-line "></i></button>

            </div>

        </motion.div >
    )
}

export default Guid3