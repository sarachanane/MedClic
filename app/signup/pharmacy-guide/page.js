import React from 'react'

const page = () => {
    return (
        <div className="flex flex-col p-6 pt-20  h-screen">
            <h1 className=' text-2xl font-bold text-blue-400'>Les abonnements mensuels de l'application</h1>
            <div className=' p-4 mt-12 border rounded-3xl flex gap-6  '>
                <span className='w-6 h-6 rounded-full bg-blue-500'></span>
                <div className='flex flex-col '>
                    <h1 className=' text-2xl font-bold '> Un mois gratuit</h1>
                    <p> profiter d'un mois gratuit</p>
                </div>
            </div>
            <div className=' p-4 mt-12 border rounded-3xl  '>
                <h1 className=' text-2xl font-bold '>Abonnement mensuel</h1>
                <div className='flex gap-6 mt-4'>
                    <span className='w-8 h-8 text flex justify-center items-center rounded-full border' ><i class="ri-check-line"></i></span>
                    <h1 className=' text-xl font-semibold '>recevoire les commands</h1>
                </div>
                <div className='flex gap-6 mt-4'>
                    <span className='w-8 h-8 text flex justify-center items-center rounded-full border' ><i class="ri-check-line"></i></span>
                    <h1 className=' text-xl font-semibold '> publier vos produits</h1>
                </div>
                <div className='flex gap-6 mt-4'>
                    <span className='w-8 h-8 text flex justify-center items-center rounded-full border' ><i class="ri-check-line"></i></span>
                    <h1 className=' text-xl font-semibold '> echanger les stockes entre les pharmacies</h1>
                </div>
            </div>

            <a href="/login" className='px-8 py-2 mt-6 rounded-lg bg-blue-400 text-white text-center '>login</a>

        </div>
        
    )
}

export default page