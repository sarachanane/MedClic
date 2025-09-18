"use client"

import React, { useState } from 'react'
import Card from './Card'

const Pharmacy = () => {
    const [section, setSection] = useState("pharmacy")
    return (
        <div className='w-screen h-screen pt-8 flex flex-col items-center'>
            <div className='w-full flex justify-between px-8'>
                <h1 className='text-xl font-bold w-2/3'>{section}</h1>
                <svg className='w-6 h-6 font-light ms-4 text-lg text-primary-1' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_7_192" styles="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H15.1076V15.1077H0.5V0.5Z" fill="white" /></mask><g mask="url(#mask0_7_192)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.80413 1.625C4.39688 1.625 1.62488 4.39625 1.62488 7.8035C1.62488 11.2107 4.39688 13.9827 7.80413 13.9827C11.2106 13.9827 13.9826 11.2107 13.9826 7.8035C13.9826 4.39625 11.2106 1.625 7.80413 1.625ZM7.80413 15.1077C3.77663 15.1077 0.499878 11.831 0.499878 7.8035C0.499878 3.776 3.77663 0.5 7.80413 0.5C11.8316 0.5 15.1076 3.776 15.1076 7.8035C15.1076 11.831 11.8316 15.1077 7.80413 15.1077Z" fill="#ADADAD" /></g><mask id="mask1_7_192" styles="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="12" width="5" height="5"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9299 12.2803H15.698V16.0413H11.9299V12.2803Z" fill="white" /></mask><g mask="url(#mask1_7_192)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1356 16.0413C14.9924 16.0413 14.8484 15.9866 14.7381 15.8771L12.0951 13.2416C11.8754 13.0218 11.8746 12.6656 12.0944 12.4458C12.3134 12.2246 12.6696 12.2261 12.8901 12.4443L15.5331 15.0806C15.7529 15.3003 15.7536 15.6558 15.5339 15.8756C15.4244 15.9866 15.2796 16.0413 15.1356 16.0413Z" fill="#ADADAD" /></g></svg>
            </div>
            <div className='w-5/6 bg-secondry-1 rounded-lg flex mt-6 mb-3'>
                <button onClick={() => { setSection("pharmacy") }} className={`w-1/3 text-sm  rounded-lg py-3  ${section == "pharmacy" ? "bg-primary-1 text-white" : ""}`}>Pharmacy</button>
                <button onClick={() => { setSection("ambelance") }} className={`w-1/3 text-sm  rounded-lg py-3  ${section == "ambelance" ? "bg-primary-1 text-white" : ""}`}>Embelance</button>
                <button onClick={(e) => { setSection("close") }} className={`w-1/3 text-sm  rounded-lg py-3  ${section == "close" ? "bg-primary-1 text-white" : ""}`}>Closed</button>
            </div>
            {
                section == "pharmacy" ?
                    <>
                        <Card data={{tag:"Ph", img: "p1.svg", name: "Ibn Sina", msg: "address: 110 house", hour: "", color: "green" }} />
                        <Card data={{tag:"Ph", img: "p1.svg", name: "EL Chifaa", msg: "address: center ville", hour: "", color: "red" }} />
                        <Card data={{tag:"Ph", img: "p1.svg", name: "Bouragba", msg: "address: center ville", hour: "", color: "red" }} />
                        <Card data={{tag:"Ph", img: "p1.svg", name: "Amine", msg: "address: la basti", hour: "", color: "green" }} />
                    </>
                    :
                    <>
                        <Card data={{tag:"Am", img: "p1.svg", name: "Achifa", msg: "phone: 0794 93 24 32", hour: "", color: "green" }} />
                        <Card data={{tag:"Am", img: "p1.svg", name: "Roah", msg: "phone: 0553 63 42 72", hour: "", color: "green" }} />

                    </>
            }


        </div>
    )
}

export default Pharmacy