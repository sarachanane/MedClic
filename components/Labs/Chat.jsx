"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react'
import Call from './Call';



const Chat = () => {
    const [msgs, setMsgs] = useState([
        { msg: "hi there", status: "recieve" },
        { msg: "hi there", status: "send" },
        { msg: "i need help", status: "send" },
        { msg: "you are welcom", status: "recieve" },

    ])

    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const [section, setSection] = useState("chat");

    const scrollableDivRef = useRef(null);

    useEffect(() => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
        }
    }, [msgs]); // Dependency array includes content to scroll when it changes


    const SendMsg = (e) => {
        e.preventDefault();
        setMsgs([...msgs, { msg: e.target.msg.value, status: "send" }])
        e.target.reset();
        setInputValue("")
        if (inputRef.current) {
            inputRef.current.focus();
        }

    }

    return (
        <div className=' w-screen h-screen flex flex-col'>
            {
                section == "chat" ?
                    <>
                        <div className=' w-screen h-screen bg-white bg-cover flex flex-col'>
                            <div className='w-full h-12 bg-[#158a7f] flex items-center justify-between  px-4 '>
                                <div className='flex items-center'>
                                    <Image src={"/images/taleb.svg"} width={100} height={100} className='w-10 h-10' />
                                    <span className='text-white ms-2 '>Chat Now</span>
                                </div>
                                <div className='flex me-4'>
                                    <svg onClick={()=>{setSection("call")}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 7.1875V14.6875C13.7496 15.0189 13.6178 15.3366 13.3835 15.571C13.1491 15.8053 12.8314 15.9371 12.5 15.9375H3.75C2.92149 15.9366 2.12718 15.607 1.54134 15.0212C0.955492 14.4353 0.625948 13.641 0.625 12.8125V5.3125C0.625379 4.9811 0.757197 4.66337 0.991535 4.42904C1.22587 4.1947 1.5436 4.06288 1.875 4.0625H10.625C11.4535 4.06345 12.2478 4.39299 12.8337 4.97884C13.4195 5.56468 13.7491 6.35899 13.75 7.1875ZM19.0637 5.70946C18.969 5.65453 18.8616 5.62542 18.7521 5.62505C18.6427 5.62467 18.535 5.65304 18.4399 5.70732L15.3149 7.49306C15.2193 7.54772 15.1397 7.62671 15.0844 7.72201C15.0291 7.81731 15 7.92555 15 8.03574V11.9643C15 12.0745 15.0291 12.1827 15.0844 12.278C15.1397 12.3733 15.2193 12.4523 15.3149 12.5069L18.4399 14.2927C18.535 14.347 18.6426 14.3754 18.7521 14.375C18.8616 14.3746 18.969 14.3455 19.0637 14.2905C19.1584 14.2356 19.237 14.1567 19.2916 14.0619C19.3462 13.967 19.375 13.8595 19.375 13.75V6.25C19.375 6.14053 19.3463 6.03297 19.2916 5.93811C19.237 5.84324 19.1584 5.76439 19.0637 5.70946Z" fill="#101623" /></svg>
                                    <svg onClick={()=>{setSection("call")}} className='ms-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3415 12.3771L13.6823 10.8089C13.4913 10.7266 13.2827 10.6935 13.0756 10.7125C12.8684 10.7316 12.6694 10.8021 12.4965 10.9178L10.54 12.222C9.34426 11.6404 8.37647 10.6769 7.78961 9.48372L7.78976 9.48357L9.08935 7.49779C9.20248 7.32539 9.27111 7.12765 9.28911 6.92224C9.30711 6.71683 9.27392 6.51016 9.1925 6.32072L7.62283 2.65839C7.51599 2.40979 7.33149 2.20249 7.09696 2.06752C6.86243 1.93256 6.5905 1.87719 6.32187 1.90971C5.2663 2.04543 4.29623 2.5608 3.5929 3.35953C2.88957 4.15827 2.50108 5.18574 2.5 6.25C2.5 12.4533 7.54669 17.5 13.75 17.5C14.8143 17.4989 15.8418 17.1104 16.6405 16.4071C17.4392 15.7037 17.9546 14.7336 18.0903 13.6781C18.1227 13.4094 18.0673 13.1375 17.9323 12.903C17.7974 12.6685 17.5901 12.484 17.3415 12.3771Z" fill="#101623" /></svg>

                                </div>

                            </div>
                            <div ref={scrollableDivRef} className='w-full flex-1   flex flex-col justify-end overflow-y-scroll py-8 px-2'>
                                {
                                    msgs.map((msg, index) => (
                                        <div key={index} className={`w-full py-2 flex ${msg.status == "send" ? "justify-end" : null}`}>
                                            <span className={`px-2 py-1 ${msg.status == "send" ? "bg-[#219C90] rounded-bl-lg" : "bg-green-500 rounded-br-lg"}  text-white rounded-t-lg  `}>{msg.msg}</span>
                                        </div>
                                    ))
                                }


                            </div>
                            <form onSubmit={SendMsg} className='w-full h-16 bg-none p-4 flex shadow'>
                                <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    ref={inputRef} 
                                    type="text" name='msg' className=' rounded-full h-10 ps-4 border border-[#219C90] text-sm outline-none placeholder:text-gray-400 text-white ' placeholder='write message...' />
                                <button type='submit' className='px-4 h-10 rounded-full bg-green-400 font-bold ms-6 text-white text-sm  flex justify-center items-center'>
                                {/* <i class="ri-send-plane-fill"></i> */}
                                send
                                </button>

                            </form>
                        </div>
                    </>
                    :
                    <Call setSection={setSection} />
            }


        </div>
    )
}

export default Chat