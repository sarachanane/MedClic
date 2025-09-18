"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const SignupGuid = ({ type }) => {
    const [eyeOff, setEyeOff] = useState(false);
    const router = useRouter();
    const [postloader, setPostloader] = useState(false);

    const Login = (e) => {
        e.preventDefault();

        setPostloader(true);
        setTimeout(() => {
            // setPostloader(false)
            toast.success('Logged in successfully!');
            router.push("/home");

        }, 1500);
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='relative w-full h-full  md:w-1/4 md:h-5/6 border rounded-xl flex flex-col items-center pt-8'>
                <img src="/logo5.png" className='w-60 h-60' />
                <h1 className='text-2xl font-semibold'>Inscription</h1>
                <a href='/signup/user' className='w-4/5 mt-6 bg-primary-1 py-3 flex justify-center rounded-full font-semibold text-white' >
                    Utilisateur
                </a>
                <a href='/signup/pharmacy' className='w-4/5 mt-6 bg-primary-1 py-3 flex justify-center rounded-full font-semibold text-white' >
                    Pharmacie
                </a>
                {/* <a href='/signup/pharmacy' className='w-4/5 mt-6 bg-primary-1 py-3 flex justify-center rounded-full font-semibold text-white' >
                    parapharmacy
                </a> */}
               <p className='text-sm text-gray-500 mt-4'>Vous avez déjà un compte ?<a href='/login' className='text-primary-1'> connexion</a></p>
            </div>
        </div>
    )
}

export default SignupGuid