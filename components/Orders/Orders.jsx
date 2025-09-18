import Image from 'next/image'
import React from 'react'
import Card from './Card'

const Orders = ({ commands }) => {
    return (
        <div className='w-screen h-screen pt-8 flex flex-col items-center'>
            <div className='w-full flex justify-between px-8'>
                <h1 className='text-xl font-bold w-2/3'>Commands</h1>
                <svg className='w-6 h-6 mt-2 ' width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.8476C15.6392 16.8476 18.2481 16.1242 18.5 13.2205C18.5 10.3188 16.6812 10.5054 16.6812 6.94511C16.6812 4.16414 14.0452 1 10 1C5.95477 1 3.31885 4.16414 3.31885 6.94511C3.31885 10.5054 1.5 10.3188 1.5 13.2205C1.75295 16.1352 4.36177 16.8476 10 16.8476Z" stroke="#329cde" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12.3888 19.8572C11.0247 21.3719 8.89665 21.3899 7.51947 19.8572" stroke="#329cde" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </div>

            <div className='w-5/6 bg-secondry-1 rounded-lg flex mt-6'>
                <button className='w-1/3 text-sm  rounded-lg py-3 bg-primary-1 text-white'>Tout</button>
                <button className='w-1/3 text-sm  rounded-lg py-3 '>Ouvert</button>
                <button className='w-1/3 text-sm  rounded-lg py-3 '>Ferme</button>
            </div>
            <div className='w-full flex flex-col items-center mb-20'>
                {
                    commands?.map((ph, index) => (
                        <Card key={index} data={ph} />
                    ))
                }
            </div>
            {/* <Card data={{_id:"123123",date:"12-12-12",imageUrl:'/images/dwa.svg' , client:{fullname:"name 1",phone:'1234124',address:"alger"}}} /> */}
            {/* <Card data={{img:"p2.svg",name:"Dr. Marcus Horizon",job:"Psikeater"}} /> */}

        </div>
    )
}

export default Orders