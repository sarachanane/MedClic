import React from 'react'
import { motion } from 'framer-motion'
const Carfour = () => {
    return (
        <div

            className='absolute bottom-1 w-full h-1/2 flex flex-col items-center justify-center'>

            <motion.a
                href='/login'
                initial={{ opacity: 0, y: 180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className='w-1/2 bg-primary-1 py-3 flex justify-center rounded-full font-semibold text-white' >Connexion</motion.a>
            <motion.a
                href='/signup'
                initial={{ opacity: 0, y: 180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='w-1/2 border-primary-1 text-primary-1 flex justify-center py-3 mt-4 rounded-full font-normal ' >Inscription</motion.a>

        </div>
    )
}

export default Carfour