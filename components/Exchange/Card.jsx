// "use client"

// import { useEffect, useState } from 'react';
import DeleteExch from './DeleteExch';
import DwaCard from './DwaCard';


const Card = ({ data, from }) => {
    // const [data, setData] =  useState(JSON.parse(Gdata))
    // useEffect(()=>{
    //     setData(Gdata)
    //     console.log(" :Gdata ",data);
    // },[Gdata]);

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
            {/* <ShowCommands data={data} /> */}
             { from == "mine" ? <DeleteExch data={data} /> : null }
            {
                from != "mine" ?
                    <>
                        <div className='w-full flex justify-between '>
                            <div className='flex flex-col'>
                                <span className='text-sm'>Ph. {data?.idUser?.fullname}</span>
                            </div>
                        </div>
                        <div className='w-full flex items-center  gap-4  mt-6'>
                            <div className='flex items-center '>
                                <i class="ri-map-pin-line text-primary-1"></i>
                                <span className='text-xs ms-1'>{data?.idUser?.address}</span>
                            </div>
                            <div className='flex items-center '>
                                <a href={"tel:" + data?.client?.phone}><i class="ri-phone-line  text-primary-1"></i></a>
                                <span className='text-xs ms-1'>{data?.idUser?.phone}</span>
                            </div>
                        </div>
                    </>
                    :
                    null
            }
            {/* {
                data?.toOffer?.length > 0 ?
                    <>
                        <h1 className='mt-4 font-light'>a Offrir</h1>
                        <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-start'>
                            {
                                data?.toOffer?.map((p, index) => (

                                    <DwaCard data={p} />
                                ))
                            }
                        </div>
                    </>
                    :
                    null
            } */}
            {/* {
                data?.toGet?.length > 0 ?
                    <>
                        <h1 className='mt-4 font-light'>a Obtenir</h1>
                        <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-start'>
                            {
                                data?.toGet?.map((p, index) => (
                                    <DwaCard data={p} />
                                ))
                            }
                        </div>
                    </>
                    :
                    null
            } */}
            {data?.data?.medName ?
                <>
                    <h1 className='mt-4 font-light'>Medicament</h1>
                    <p className='text-xs text-gray-500 mt-2'>{data?.data?.medName}</p>
                </>
                :
                null
            }
            {data?.description ?
                <>
                    <h1 className='mt-4 font-light'>Description</h1>
                    <p className='text-xs text-gray-500 mt-2'>{data?.description}</p>
                </>
                :
                null
            }
            <div className='w-full flex justify-between items-center mt-4'>
                <span className='text-xs text-gray-500'>Creer le : {new Date(data?.createdAt).toLocaleDateString()}</span>
                {/* <span className='text-xs text-gray-500'>Mise à jour le : {new Date(data?.updatedAt).toLocaleDateString()}</span> */}
            </div>
            {
                from != "mine" ?
                    <div className='w-full flex justify-end mt-4'>
                        <a href={"/dashboard/pharmacy/" + data?.idPharmacy?._id} className='w-2/5 text-center py-2 bg-primary-1 text-white rounded-lg'>Decouvrir</a>
                    </div>
                    :
                    null
            }


        </div>
    )
}

export default Card