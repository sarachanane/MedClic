import Image from 'next/image'
import React from 'react'

const DwaCard = ({data}) => {
    return (
        <div className='w-[30%] flex flex-col items-center p-2 bg-secondry-1 rounded-lg px-2'>
            <Image src={data.imageUrl} placeholder="blur" blurDataURL={data?.base64Placeholder} width={1000} height={1000} className='w-12 h-8 ' />
            <span className='text-xs font-bold w-full mt-2 text-start' >{data?.name}</span>
            <span className='text-xs text-gray-400 w-full text-start' >{data?.description}</span>
            <div className='w-full flex items-center justify-between'>
                <span className='text-[10px] font-bold  text-start'>{data?.price}</span>
                <i class="ri-add-circle-line"></i>
            </div>
        </div>
    )
}

export default DwaCard