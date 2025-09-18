import Image from 'next/image'
import React from 'react'

const DwaCard = ({ data }) => {
    return (
        <div className='w-full flex gap-4    bg-pink-200 rounded-lg pe-2'>
            <Image src={data.imageUrl} placeholder="blur" blurDataURL={data?.base64Placeholder} width={1000} height={1000} className='w-1/3 h-full object-cover rounded ' />
            <div className=" w-full flex flex-col p-2 ">
                <div className='w-full flex justify-between items-center '>
                    <span className='text-2xl mt-2 font-bold w-full text-start' >{data.name}</span>
                    <a href={"/dashboard/pharmacy/" + data?.idPharmacy?._id}><i class="ri-arrow-right-line"></i></a>
                </div>
                <span className='text-xs text-gray-400 w-full text-start' >{data.description}</span>
                <span className='text-[20px] text-red-500 font-bold  text-start inline-block '><i class="ri-price-tag-3-line"></i> {data.price}</span>
                <span className='text-2xl mt-2 font-bold w-full text-start inline-block ' ><i class="ri-store-2-line text-sm "></i> {data?.idPharmacy?.fullname}</span>
                <span className='text-xs text-gray-400 w-full text-start inline-block ' ><i class="ri-map-pin-line"></i> {data?.idPharmacy?.address}</span>
            </div>
        </div>
    )
}

export default DwaCard