"use client"
import { deleteMongoExchange } from '@/actions/exchange.action';
// import { deleteMongoExchange } from '@/actions/exchange.action';
import { Spinner } from '@nextui-org/react';
import React, { useState } from 'react'

const DeleteExch = ({data}) => {
    const [postloader, setPostLoader] = useState(false);

    const deleteExchange = async (_id) => {
        setPostLoader(true);
        try {
            const response = await deleteMongoExchange(_id)
        } catch (e) {
            console.error("Error deleting reduction:", e);
        } finally {
            setPostLoader(false);
        }
        setPostLoader(false);
    }
    return (
        <>

            <button onClick={() => { deleteExchange(data?._id) }} className='absolute top-2 right-2 text-yellow-400 bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100'>
                {
                    postloader ?
                        <Spinner size='sm' color='warning' />
                        :
                        <i className="ri-delete-bin-line text-2xl"></i>

                }
            </button>
        </>
    )
}

export default DeleteExch