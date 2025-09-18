import Image from 'next/image'
import React from 'react'
import ShowCommands from './ShowCommands';
import CancleCommand from './CancleCommand';

const Card = ({ data,user }) => {

    console.log("  data : ", data);
    function getFirstLetters(sentence) {
        // Split the sentence into words
        const words = sentence?.split(' ');

        // Extract the first letter of each word
        const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

        return firstLetters;
    }

    return (
        <div className=' relative w-5/6 border rounded-lg px-4 mt-6 py-3'>
            <div className='w-full flex justify-between '>
                <div className='flex flex-col'>
                    <span className='text-lg font-bold '>Mr/Mme. {data?.user?.fullname}</span>
                    <p className="text-sm">{data?.user?.phone}</p>
                    <span className='text-xs mt-4 text-gray-400'>{new Date(data?.createdAt).toLocaleDateString()}</span>
                    <p className=" font-bold mt-6"> {data?.data?.medName ? "Médicament" : "Ordonnance"}</p>
                </div>
                {/* {
                    data?.data?.medName ?
                        <>

                        </>
                        :
                        <> */}
                            <div className='w-full flex gap-4 items-center justify-end '>
                                <ShowCommands user={user} data={data} />
                                {/* <CancleCommand idCommand={data?._id} idPharmacy={data?.idPharmacy} /> */}
                            </div>
                        {/* </>
                } */}

            </div>




        </div>
    )
}

export default Card