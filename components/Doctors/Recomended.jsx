import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Recomended = () => {
    return (
        <>
            <div className='w-full ms-16 mt-6 font-bold'>Recommended Doctors</div>
            <div className='relative w-full flex justify-center mt-4 '>
                <Link href={"/dashboard/doctors/werqwe"} className='w-3/4 h-32 bg-white  border rounded-2xl mb-3 flex items-center '>
                    <Image src={"/images/p1.svg"} width={100} height={100} className="w-16 h-16 m-4 rounded-full " />
                    <div className='h-5/6 pt-3'>
                        <h1 className='font-bold text-sm'>Dr. Marcos Horizon</h1>
                        <h2 className='text-xs text-gray-400'>Chardiologist</h2>
                        <div className='w-full mt-4 border-t border-gray-200'></div>
                        <div className='flex mt-2' >
                            <div className='flex  items-center bg-secondry-1 px-1 rounded'>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70585 6.75675C8.56556 6.89271 8.5011 7.08933 8.53306 7.28217L9.0146 9.94716C9.05523 10.173 8.9599 10.4016 8.77085 10.5322C8.5856 10.6676 8.33914 10.6838 8.1371 10.5755L5.73806 9.32425C5.65465 9.27983 5.56202 9.256 5.46723 9.25329H5.32044C5.26952 9.26087 5.21969 9.27712 5.17419 9.30204L2.7746 10.5592C2.65598 10.6188 2.52165 10.64 2.39002 10.6188C2.06935 10.5582 1.8554 10.2527 1.90794 9.93037L2.39002 7.26537C2.42198 7.07091 2.35752 6.87321 2.21723 6.73508L0.261271 4.83925C0.0976876 4.68054 0.0408126 4.44221 0.115563 4.22716C0.188146 4.01266 0.373396 3.85612 0.597104 3.82091L3.28919 3.43037C3.49394 3.40925 3.67377 3.28466 3.76585 3.1005L4.9521 0.668415C4.98027 0.614248 5.01656 0.564415 5.06044 0.522165L5.10919 0.484248C5.13465 0.456081 5.1639 0.43279 5.1964 0.413831L5.25544 0.392165L5.34752 0.354248H5.57556C5.77923 0.375373 5.95852 0.497248 6.05223 0.679248L7.25419 3.1005C7.34085 3.27762 7.50931 3.40058 7.70377 3.43037L10.3959 3.82091C10.6234 3.85341 10.8135 4.0105 10.8888 4.22716C10.9597 4.44437 10.8985 4.68271 10.7317 4.83925L8.70585 6.75675Z" fill="#32DEB5" /></svg>
                                <span className='text-primary-1 ms-1 text-xs'>4.7</span>
                            </div>
                            <div className='flex ms-4 items-center px-1 rounded'>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.895844 4.5887C0.895844 2.09711 2.97795 0.083252 5.49646 0.083252C8.02208 0.083252 10.1042 2.09711 10.1042 4.5887C10.1042 5.84425 9.64756 7.00988 8.89599 7.99786C8.06686 9.08766 7.04493 10.0372 5.89464 10.7825C5.63137 10.9547 5.39378 10.9677 5.10484 10.7825C3.94799 10.0372 2.92606 9.08766 2.10403 7.99786C1.35192 7.00988 0.895844 5.84425 0.895844 4.5887ZM3.98022 4.72898C3.98022 5.56366 4.66132 6.22014 5.49646 6.22014C6.33214 6.22014 7.0198 5.56366 7.0198 4.72898C7.0198 3.90079 6.33214 3.21235 5.49646 3.21235C4.66132 3.21235 3.98022 3.90079 3.98022 4.72898Z" fill="#3B4453" /></svg>
                                <span className='ms-1 text-xs'>800m away</span>
                            </div>

                        </div>

                    </div>

                </Link>
                <div className='w-3/5 h-20 absolute bottom-0 -z-10 rounded-xl bg-gray-50 border'></div>


            </div>
        </>
    )
}

export default Recomended