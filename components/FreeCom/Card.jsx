import Image from 'next/image'
import React from 'react'
import ShowCommands from './ShowCommands';

const Card = ({ data }) => {

    function getFirstLetters(sentence) {
        // Split the sentence into words
        const words = sentence?.split(' ');

        // Extract the first letter of each word
        const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

        return firstLetters;
    }

    return (
        <div className={` w-5/6 flex  border rounded-lg  mt-6 ${data?.idPharmacy  ? "bg-green-400" : "bg-yellow-400 " } `}>
            {/* <Image src={data?.imageUrl} width={100} height={100} className=' absolute top-0 right-0 m-4 w-32 h-32' /> */}
            <div className=' flex-1 flex flex-col p-4  '>
                <div className='w-full flex justify-between '>
                    <div className='flex flex-col'>
                        <span className='text-sm'>pharmacy: {data?.idPharmacy?.fullname || "--"}</span>
                        <span className='text-xs text-gray-400'>{new Date(data?.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2  mt-6'>
                    <div className='flex items-center '>
                        <i class="ri-map-pin-line text-primary-1"></i>
                        <span className='text-xs ms-1'>{data?.idPharmacy?.address || "--"}</span>
                    </div>
                    <div className='flex items-center '>
                        <a href={"tel:" + data?.idPharmacy?.phone}><i class="ri-phone-line  text-primary-1"></i></a>
                        <span className='text-xs ms-1'>{data?.idPharmacy?.phone|| "--"}</span>
                    </div>
                    {/* <div className='flex items-center '>
                        <span className='w-1 h-1 bg-orange-400 rounded-full'></span>
                        <span className='text-xs ms-4'>{data?.status}</span>
                    </div> */}
                </div>
                {/* <div className='w-full flex justify-end mt-4'>
                    <button className='w-2/5 text-center py-2 bg-white text-black rounded-lg'>afficher</button>
                </div> */}
            </div>
            {data?.imageUrl ? <ShowCommands data={data} /> : null }
        </div>
    )
}

export default Card