import React, { useState } from 'react'
import AddMedication from './AddMedication'
import CreateMed from './CreateMed'
import DwaCard from './DwaCard'
import GetMap from './GetMap'
import { Spinner, Tab, Tabs } from '@nextui-org/react'
import AutoActivate from './AutoActivate'
import { useRouter } from 'next/navigation'

const Apointment = ({ user, setUser, products, setSection }) => {
    const [days, setDays] = useState([
        { month: "Mon", day: "23", status: false },
        { month: "Tue", day: "24", status: false },
        { month: "Wed", day: "25", status: false },
        { month: "Thu", day: "26", status: true },
        { month: "Fri", day: "27", status: false },
        { month: "Sat", day: "28", status: false },
    ])

    const [times, setTimes] = useState([
        { time: "14:00 PM", status: "not" }, { time: "04:00 AM", status: "yet" }, { time: "15:00 PM", status: "not" }, { time: "17:00 PM", status: "not" }, { time: "9:00 AM", status: "done" }, { time: "18:00 PM", status: "yet" }, { time: "10:00 AM", status: "yet" }, { time: "11:00 AM", status: "yet" }, { time: "12:00 AM", status: "not" },
    ])
    const ChangeDay = (day) => {
        setDays(prevItems =>
            prevItems.map(item =>
                item.day == day ? { ...item, status: true } : { ...item, status: false }
            )
        );
    }
    const ChangeTime = (time) => {
        setTimes(prevItems =>
            prevItems.map(item =>
                item.time == time && item.status != "not" ? { ...item, status: "done" } : item.status == "done" ? { ...item, status: "yet" } : item
            )
        );
    }

    const [postloader, setPostloader] = useState(false);
    const router = useRouter()
    const handleCheckout = async () => {
        setPostloader(true);
        console.log("ihi ih ih ih iofdjofsd");


        try {
            //   cancel_url: "https://17ab-105-235-129-82.ngrok-free.app/dashboard/payment/cancel", // Optional: Add cancel URL
            const options = {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer test_sk_WwqqkI5qy0wYwtrTh0AgAHWlHDXecVwrZNsBoTpz', // Replace with your actual secret key
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: 1200, // Convert to cents/smallest currency unit
                    currency: "dzd",
                    success_url: "https://medclic.vercel.app/home", // Replace with your success URL
                    description: `pro Subscription Plan`,
                    metadata: {
                        plan_id: "1 moins",
                        plan_name: "pro",
                        duration: "1 moin"
                    }
                })
            };

            const response = await fetch('https://pay.chargily.net/test/api/v2/checkouts', options);
            const data = await response.json();

            if (response.ok && data.checkout_url) {
                // Redirect user to Chargily checkout page
                router.push(data.checkout_url);
            } else {
                console.error('Checkout creation failed:', data);
                alert('Failed to create checkout. Please try again.');
                setPostloader(false);
            }
        } catch (error) {
            console.error('Error creating checkout:', error);
            alert('An error occurred. Please try again.');
            setPostloader(false);
        }
    };


    return (
        <>
            {/* <div className='w-full ms-8 mt-6 font-bold'>About</div>
            <p className='ms-4 me-4 text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit numquam modi sint, praesentium nobis vero repellendus aspernatur soluta qui mollitia, pariatur in incidunt, nam nesciunt nulla doloremque et delectus.</p> */}
            <AutoActivate setUser={setUser} user={user} status={user?.data?.delivary == "true" ? "false" : "true"} />
            <div className='w-11/12 border-t border-gray-200  m-6 '></div>
            <div className='w-full flex justify-end px-4'>
                {/* <CreateMed user={user} /> */}
            </div>
            <div className='w-full min-h-60'>
                <Tabs radius='full' aria-label="Options" color="primary" variant="solid" className='w-full mt-6'>
                    <Tab
                        className='w-full'
                        key="All"
                        title={
                            <div className="flex items-center space-x-2">
                                <i class="ri-file-list-3-fill text-xl userId"></i>
                                <span>Tout</span>
                            </div>
                        }
                    >
                        <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                            {
                                products?.map((p, index) => (
                                    <DwaCard data={p} />
                                ))
                            }
                        </div>
                    </Tab>
                    
                    <Tab
                        className='w-full'
                        key="music"
                        title={
                            <div className="flex items-center space-x-2">
                                <i class="ri-medicine-bottle-line text-xl"></i>
                                <span>Compléments alimentaire</span>
                            </div>
                        }
                    >
                        <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                            {
                                products?.filter?.(item => item?.data?.category == "complements-alimentaire")?.map((p, index) => (
                                    <DwaCard data={p} />
                                ))
                            }
                        </div>
                    </Tab>
                    <Tab
                        className='w-full'
                        key="videos"
                        title={
                            <div className="flex items-center space-x-2">
                                <i class="ri-amazon-fill text-xl"></i>
                                <span>bébé et maman</span>
                            </div>
                        }
                    >
                        <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                            {
                                products?.filter?.(item => item?.data?.category == "bebe-et-maman")?.map((p, index) => (
                                    <DwaCard data={p} />
                                ))
                            }
                        </div>
                    </Tab>
                    <Tab
                        className='w-full'
                        key="videos22"
                        title={
                            <div className="flex items-center space-x-2">
                                <i class="ri-amazon-fill text-xl"></i>
                                <span>Soins quotidiens</span>
                            </div>
                        }
                    >
                        <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                            {
                                products?.filter?.(item => item?.data?.category == "soins-quotidiens")?.map((p, index) => (
                                    <DwaCard data={p} />
                                ))
                            }
                        </div>
                    </Tab>
                    <Tab
                        className='w-full'
                        key="videos3"
                        title={
                            <div className="flex items-center space-x-2">
                                <i class="ri-amazon-fill text-xl"></i>
                                <span>Peau et corps</span>
                            </div>
                        }
                    >
                        <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                            {
                                products?.filter?.(item => item?.data?.category == "peau-et-corps")?.map((p, index) => (
                                    <DwaCard data={p} />
                                ))
                            }
                        </div>
                    </Tab>

                    <Tab
                        className='w-full'
                        key="videos3"
                        title={
                            <div className="flex items-center space-x-2">
                                <i class="ri-amazon-fill text-xl"></i>
                                <span>Nouveaute</span>
                            </div>
                        }
                    >
                        <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                            {
                                products?.filter?.(item => item?.data?.category == "nouveaute")?.map((p, index) => (
                                    <DwaCard data={p} />
                                ))
                            }
                        </div>
                    </Tab>
                </Tabs>
            </div>
            

            <div className='w-full px-10 mt-10 min-h-96 text-sm font-bold text-gray-500'>
                <h1>Changer votre adresse</h1>
                <GetMap userId={user?._id} user={user} init_coordinates={user?.data?.long_lat} />
            </div>
            <div className='w-full flex mt-12 px-4'>
                <button onClick={handleCheckout} type='submit' className='w-4/5 ms-8 bg-primary-1 py-2  flex justify-center rounded-full font-semibold text-white' >
                    {
                        postloader ?
                            <Spinner color='default' />
                            :
                            "Payment Abonnement"
                    }

                </button>
            </div>
        </>
    )
}

export default Apointment