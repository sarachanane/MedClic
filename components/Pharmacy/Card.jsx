"use client"


import Image from 'next/image'
import React, { useState } from 'react'
import Popup from '../Doctors/Popup';

const Card = ({ data }) => {
    const [popUp, setPopUp] = useState(false); 
    const [doctor,setDoctor] = useState({})

    return (
        <div onClick={()=>{setPopUp(true)}} className='w-11/12 flex items-center mt-3 '>
            {/* <Image src={"/images/" + data.img} width={100} height={100} className='w-16 h-16 ' /> */}
            <div className='w-16 h-16 rounded-full bg-primary-1 text-white text-2xl flex justify-center items-center font-bold'>{data.tag}</div>
            <div className='flex-1 ms-2'>
                <div className='w-full flex items-center justify-between'>
                    <span className='text-sm font-bold'>{data.name}</span>
                    <span className='text-xs text-gray-400'>{data.hour}</span>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <span className='text-xs text-gray-400'>{data.msg}</span>
                    {/* <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.73533 9.50743L4.02283 5.79568L5.08258 4.73443L7.73533 7.38718L14.0991 1.02268L15.1596 2.08318L7.73457 9.50818L7.73533 9.50743ZM4.55308 9.50743L0.840576 5.79568L1.90108 4.73443L5.61357 8.44693L4.55383 9.50743H4.55308ZM7.73533 6.32593L6.67408 5.26543L11.4471 0.492432L12.5083 1.55293L7.73533 6.32518V6.32593Z" fill="#ADADAD" /></svg> */}
                    <span className={`w-1.5 h-1.5 bg-${data.color}-400 rounded-full`}></span>
                </div>

            </div>

            {
                popUp ?
                    <Popup closePopup={() => { setPopUp(false)}}>
                        <div className='w-4/5 h-3/5 px-4 bg-white rounded-xl flex flex-col items-center'>
                            {/* <Lottie className='w-52 h-52' animationData={check} loop={false} /> */}
                            {/* <Image src={"/images/" + data.img} width={100} height={100} className='w-20 h-20  mt-20' /> */}
                            <div className='w-16 h-16 rounded-full bg-primary-1 mt-20 text-white text-2xl flex justify-center items-center font-bold'>{data.tag}</div>
                            <h1 className='text-xl font-bold mt-6'>{data.name}</h1>
                            <p className='text-sm mt-4 text-center'>{data.msg}</p>
                            {/* <Link href='/doctors/werq/chat' className='w-4/5 mt-12 bg-primary-1 py-2  flex justify-center rounded-full font-semibold text-white' >Chat Doctor</Link> */}

                        </div>

                    </Popup>
                    : null
            }

        </div>
    )
}

export default Card