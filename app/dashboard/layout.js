'use client'

import UserMenu from "@/components/UserMenu"

const layout = ({ children }) => {
   


    return (
        <div className=' relative w-screen h-screen flex flex-col md:justify-between '>
            <div className='w-full flex items-center justify-end'>
            <UserMenu />

            </div>
            <div className='w-1/5 min-h-screen hidden md:block '></div>
            <div className='w-full md:w-3/4 md:h-full overflow-y-scroll hide-scrollbar'>
                {children}
            </div>
          

        </div>
    )
}

export default layout