import React from 'react'

const Map = () => {
    return (
        <div className='relative w-screen h-screen bg-[url("/images/map.svg")] pt-6 flex flex-col items-center'>
            <div className='w-4/5 h-12  bg-white border rounded-full border-primary-1-hover flex items-center '>
                <svg className='w-6 h-6 font-light ms-4 text-lg text-primary-1' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_7_192" styles="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H15.1076V15.1077H0.5V0.5Z" fill="white" /></mask><g mask="url(#mask0_7_192)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.80413 1.625C4.39688 1.625 1.62488 4.39625 1.62488 7.8035C1.62488 11.2107 4.39688 13.9827 7.80413 13.9827C11.2106 13.9827 13.9826 11.2107 13.9826 7.8035C13.9826 4.39625 11.2106 1.625 7.80413 1.625ZM7.80413 15.1077C3.77663 15.1077 0.499878 11.831 0.499878 7.8035C0.499878 3.776 3.77663 0.5 7.80413 0.5C11.8316 0.5 15.1076 3.776 15.1076 7.8035C15.1076 11.831 11.8316 15.1077 7.80413 15.1077Z" fill="#ADADAD" /></g><mask id="mask1_7_192" styles="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="12" width="5" height="5"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9299 12.2803H15.698V16.0413H11.9299V12.2803Z" fill="white" /></mask><g mask="url(#mask1_7_192)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1356 16.0413C14.9924 16.0413 14.8484 15.9866 14.7381 15.8771L12.0951 13.2416C11.8754 13.0218 11.8746 12.6656 12.0944 12.4458C12.3134 12.2246 12.6696 12.2261 12.8901 12.4443L15.5331 15.0806C15.7529 15.3003 15.7536 15.6558 15.5339 15.8756C15.4244 15.9866 15.2796 16.0413 15.1356 16.0413Z" fill="#ADADAD" /></g></svg>
                <input type="text" className='ms-2 w-2/3 outline-none bg-none text-sm' placeholder='enter your desire search' />
            </div>
            <div className='absolute bottom-0 w-2/3 h-32 bg-white flex flex-col items-center rounded-xl mb-8 pt-6'>
                <div className='flex items-center justify-evenly  w-full px-3'>
                    <i class="ri-map-pin-line"></i>
                    <p className='ms-2 font-bold text-sm'>27 ZEBIDA ABDEL KADER SIDI BEL ABBES </p>
                </div>
                <div className='w-4/5 mt-3 bg-primary-1 py-1  flex justify-center rounded-full text-sm font-semibold text-white' >confirm location </div>


            </div>

        </div>
    )
}

export default Map