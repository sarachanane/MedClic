"use client"
import React, { useEffect, useState } from 'react';
import Welcome from './Welcome'
import Carfour from './Carfour'

const Acceuille = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 1000);

        return () => clearTimeout(timer);
    }, [isVisible]);
    return (
        <main className="relative w-screen h-screen  overflow-x-hidden hide-scrollbar">
            <Welcome />
            {isVisible &&
                <Carfour />
            }



        </main>
    )
}

export default Acceuille