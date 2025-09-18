"use client"
import { createProduct, deleteMongoProduct } from '@/actions/product.action';
import { Spinner } from '@nextui-org/react';
import Image from 'next/image'
import React, { useState } from 'react'
// import ShowCommands from './ShowCommands';

const Card = ({ data }) => {
    const [postloader, setPostLoader] = useState(false);

    const deleteReduction = async  (_id) => {
        setPostLoader(true);
        try {
            const response = await deleteMongoProduct(_id)
        } catch (e) {
            console.error("Error deleting reduction:", e);
        } finally {
            setPostLoader(false);
        }
        setPostLoader(false);
    }

    function getFirstLetters(sentence) {
        // Split the sentence into words
        const words = sentence?.split(' ');

        // Extract the first letter of each word
        const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

        return firstLetters;
    }

    return (
        <div className='relative  w-5/6 flex  border rounded-lg  mt-6 bg-yellow-400 '>
            <button onClick={() => { deleteReduction(data?._id) }} className='absolute top-2 right-2 text-yellow-400 bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100'>
                {
                    postloader ?
                        <Spinner size='sm' color='warning' />
                        :
                        <i className="ri-delete-bin-line text-2xl"></i>

                }
            </button>
            <Image src={data?.imageUrl} width={100} height={100} className='   m-4 w-32 h-32' />
            {/* <ShowCommands data={data} /> */}
            <div className=' flex-1 pt-4 flex flex-col '>
                <div className='w-full flex justify-between '>
                    <div className='flex flex-col'>
                        <span className='text-sm'> {data?.name}</span>
                        <span className='text-xs text-gray-400'>{new Date(data?.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2  mt-6'>
                    <div class="flex flex-col  ">
                        {data?.data?.oldPrice ? <span class="text-gray-500 line-through text-sm">DZD {data?.data?.oldPrice}</span> : null}
                        <span class="text-red-600 font-bold text-lg">DZD {data?.price}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card