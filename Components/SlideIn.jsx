import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

function SlideIn({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {/* <button onClick={()=>setOpen(!open)}>Open and Close</button> */}
      <motion.div
        key={"modal"}
        initial={{ opacity: 0, y: -500, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        exit={{ opacity: 0, y: -500, rotate: 0 }}
        className='fixed inset-0 bg-gray-900 bg-opacity-95 flex justify-center items-center z-50'
      >
        <div className='p-2 md:max-w-3xl '>
          <button
            className='absolute top-2 right-2 text-gray-700 hover:bg-teal-400 hover:rounded-sm hover:text-gray-900  transition duration-100 ease-in'
            onClick={onClose}
          >
            <HiX color='white' size={30} />
          </button>
          {children}
        </div>
        <button className='bg-teal-200 p-20 rounded-md text-2xl font-bold italic'>
          Claimed! 🎊
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default SlideIn;
