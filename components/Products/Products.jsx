"use client"

import React, { useState } from 'react'
import DwaCard from './DwaCard'

const Products = ({ user, products: mProducts }) => {
    const [products, setProducts] = useState(mProducts)

    const handleFilter = (text) => {
        if (text) {
            setProducts(prev => prev.filter(item =>
                item?.name?.toLowerCase()?.includes(text?.toLowerCase())
            ));
        } else {
            setProducts(mProducts)
        }
    };

    return (
        <div className='w-screen min-h-screen pt-8 flex flex-col items-center'>
            <div className='w-4/5 flex justify-between mt-4'>
                <span className='text-sm font-bold'>produits</span>
                <span className='text-xs text-primary-1'>voir tout</span>
            </div>
            <div className='w-[342px] md:w-[532px] h-[61px] mt-4  px-4 flex justify-start items-center gap-2 border border-[#E2E8F0] bg-gray-100 rounded-full'>
                <i className="ri-search-line text-xl"></i>
                <input type="text" onChange={(e) => handleFilter(e.target.value)} className='outline-none bg-gray-100 border-none text-[16px] placeholder:text-[16px] placeholder:font-light' placeholder='Type here...' />
            </div>
            <div className='w-full flex flex-wrap gap-4 px-4 mt-8 '>
                {
                    products?.map((p, index) => (
                        <DwaCard data={p} />
                    ))
                }
            </div>

        </div>
    )
}

export default Products