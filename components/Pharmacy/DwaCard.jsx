import Image from 'next/image'
import React from 'react'

const DwaCard = ({data}) => {
    return (
        <div className='w-1/4 flex flex-col items-center bg-secondry-1 rounded-lg px-2'>
            <Image src={"/images/"+data.img} width={1000} height={1000} className='w-3/5 h-10 ' />
            <span className='text-xs font-bold w-full text-start' >{data.name}</span>
            <span className='text-xs text-gray-400 w-full text-start' >{data.pc}</span>
            <div className='w-full flex items-center justify-between'>
                <span className='text-[10px] font-bold  text-start'>{data.price}</span>
                <i class="ri-add-circle-line"></i>
            </div>
        </div>
    )
}

export default DwaCard