



import { motion, AnimatePresence } from 'framer-motion';

const Popup = ({ children, closePopup }) => {

    return (
        <AnimatePresence>
            <div className=" w-full h-full fixed top-0 left-0 z-10  flex  justify-center items-center">
            {/* <div className='w-full h-full bg-black opacity-25'></div> */}
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.3 }}
                    onClick={closePopup} className="w-full h-full absolute top-0 left-0 bg-black  -z-10 "></motion.div>
                {children}
            </div>
        </AnimatePresence>
    )
}

export default Popup