import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Ambelace = () => {
  return (
    <div  className='w-screen h-screen pt-20'>
     <div className='w-full flex flex-col items-center px-20'>
                <Image src={"/images/ambelance.svg"} width={1000} height={1000} className='w-44 h-44 rounded-xl' />
                <Link href={"/ambelance/flsdlkf"} className='w-full py-4 mt-4 bg-primary-1 rounded-xl text-center font-bold'><span>Order</span></Link>
            </div>
    </div>
  )
}

export default Ambelace