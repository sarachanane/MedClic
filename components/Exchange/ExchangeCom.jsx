"use client"

import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Input } from '@nextui-org/react';

const ExchangeCom = ({ exchanges:gExchanges,from }) => {
    const [exchanges , setExchanges] = useState(JSON.parse(gExchanges))
    useEffect(()=>{
        setExchanges(JSON.parse(gExchanges))
        console.log(" gExchanges : ",exchanges);
    },[gExchanges])
    const handleFilter = (text)=>{
        setExchanges(JSON.parse(gExchanges)?.filter(item => item?.data?.medName?.toLowerCase()?.includes(text.toLowerCase())))
    }
    return (
        <div className='w-screen h-screen pt-8 flex flex-col items-center'>
            <div className='w-full flex justify-between px-8'>
                <h1 className='text-xl font-bold w-2/3'>Echanges</h1>
                <svg className='w-6 h-6 mt-2 ' width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.8476C15.6392 16.8476 18.2481 16.1242 18.5 13.2205C18.5 10.3188 16.6812 10.5054 16.6812 6.94511C16.6812 4.16414 14.0452 1 10 1C5.95477 1 3.31885 4.16414 3.31885 6.94511C3.31885 10.5054 1.5 10.3188 1.5 13.2205C1.75295 16.1352 4.36177 16.8476 10 16.8476Z" stroke="#329cde" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12.3888 19.8572C11.0247 21.3719 8.89665 21.3899 7.51947 19.8572" stroke="#329cde" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </div>
             <div className='w-full px-10  flex items-center mt-6 gap-4'>
                <Input type="text" label={"rechercher"} onChange={(e) => handleFilter(e.target.value)} className='w-full ' required />
            </div>
            {
                exchanges?.map((ph, index) => (
                    <Card from={from} key={index} data={{...ph,imageUrl:'/images/dwa.svg'}} />
                ))
            }
        </div>
    )
}

export default ExchangeCom