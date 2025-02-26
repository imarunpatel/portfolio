'use client';
import React from 'react'
import { motion } from "motion/react"


const Heading = () => {
  return (
    <motion.h1
        className="font-[neuton] relative pr-6 py-1 w-fit text-white text-2xl md:text-3xl font-semibold rounded-md bg-gray-900 overflow-hidden border-2 border-transparent"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(90deg, #f97316, #14b8a6, #9333ea)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        <span className='text-xl md:text-2xl'>Hello 👋 , </span>
        <br/> 
        I am Arun a Frontend Engineer
      </motion.h1>
  )
}

export default Heading