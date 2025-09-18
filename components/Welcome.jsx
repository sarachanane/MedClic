"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Welcome = () => {

    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(true);
    const [fm,setFm] = useState("h-full")

    useEffect(() => {
        const timer = setTimeout(() => {
            controls.start({
                y: -window.innerHeight,
                transition: { duration: 1 },
            });
            setFm("h-1/2")
            setIsVisible(false)
        }, 1000);

        return () => clearTimeout(timer);
    }, [controls]);

    return (
        <div className={`w-full ${fm} transition-all ease-in-out duration-1000  flex flex-col justify-center items-center`}>
             {/* {isVisible && (<motion.img src={"/logo.png"}  className='w-32 h-32' /> )} */}
           
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    // transition={{ duration: 1 }}
                    src="/logo5.png" className='w-60 h-60' />
        </div>
    )
}

export default Welcome