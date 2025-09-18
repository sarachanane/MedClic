import Image from 'next/image'
import React from 'react'
import ShowCommands from './ShowCommands';
import { Chip } from '@nextui-org/react';

const Card = ({ data }) => {

    function getFirstLetters(sentence) {
        // Split the sentence into words
        const words = sentence?.split(' ');

        // Extract the first letter of each word
        const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

        return firstLetters;
    }

    return (
        <div className=' relative w-5/6 border rounded-lg px-4 mt-6 py-3'>
            {/* <Image src={data?.imageUrl} width={100} height={100} className=' absolute top-0 right-0 m-4 w-32 h-32' /> */}
            <ShowCommands data={data} />
            <div className='w-full flex justify-between '>
                <div className='flex flex-col'>
                    <span className='text-sm'>Ph. {data?.pharmacy?.fullname}</span>
                    {/* <span className='text-xs text-gray-400'>{data?.pharmacy?.phone}</span> */}
                    <span className='text-xs text-gray-400'>{new Date(data?.createdAt).toLocaleDateString()}</span>
                </div>
                {/* <div class="w-10 h-10 bg-[#329cde]  border border-white rounded-full flex justify-center items-center text-white" alt="">{getFirstLetters(data?.fullname)}</div> */}
            </div>
            <div className='w-full flex flex-col gap-2  mt-6'>
                <div className='flex items-center '>
                    <i class="ri-map-pin-line text-primary-1"></i>
                    <span className='text-xs ms-1'>{data?.pharmacy?.address}</span>
                </div>
                <div className='flex items-center '>
                    <a href={"tel:" + data?.pharmacy?.phone}><i class="ri-phone-line  text-primary-1"></i></a>
                    <span className='text-xs ms-1'>{data?.pharmacy?.phone}</span>
                </div>
                <div className='flex items-center '>
                    <span className='w-1 h-1 bg-orange-400 rounded-full'></span>
                    <span className='text-xs ms-4'>{data?.status}</span>
                </div>
                {
                    data?.data?.generic == "true" ?
                        <div className='flex items-center '>
                            <span className='w-1 h-1 bg-orange-400 rounded-full'></span>
                            <span className='text-xs ms-4'>Generic</span>
                        </div>
                        :
                        <div className='flex items-center '>
                            <span className='w-1 h-1 bg-green-400 rounded-full'></span>
                            <span className='text-xs ms-4'>Original</span>
                        </div>
                }
                <div className='w-full '>
                    <Chip color={data?.pharmacy?.data?.delivary == "true" ? "success" : "danger"} className='text-white'  >
                        {data?.pharmacy?.data?.delivary == "true" ? "livraison disponible" : "livraison indosponible"}
                    </Chip>
                </div>
            </div>
            <div className='w-full flex justify-end mt-4'>
                {/* <button className='w-2/5 py-2 bg-secondry-1 rounded-lg'>Cancel</button> */}
                <button className='w-2/5 text-center py-2 bg-primary-1 text-white rounded-lg'>Découvrir</button>
            </div>


        </div>
    )
}

export default Card