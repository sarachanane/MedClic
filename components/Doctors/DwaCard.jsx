import Image from 'next/image'
import React from 'react'

const DwaCard = ({data,setSelected}) => {
    return (
        <div className='w-[30%] flex flex-col items-center p-2 bg-white !shadow-[0_0.15rem_1.25rem_#d7d7d7] rounded-lg px-2'>
            <Image src={data.imageUrl} placeholder={data?.base64Placeholder ? "blur" : null} blurDataURL={data?.base64Placeholder} width={1000} height={1000} className='w-16 h-16 ' />
            <span className='text-lg font-bold w-full mt-2 text-start' >{data?.name}</span>
            <span className='text-xs text-gray-400 w-full text-start' >{data?.description}</span>
            <div className='w-full flex items-center justify-between'>
                <span className='text-[20px] font-bold  text-start'>{data?.price} DZD</span>
                <i class="ri-add-circle-line hover:cursor-pointer   " onClick={(e)=>{setSelected(prev => [...(prev.length > 0 ? prev : []),data?._id ])}} ></i>
            </div>
        </div>
    )
}

export default DwaCard