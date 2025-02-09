'use client';
import React from 'react'
import { motion } from "motion/react"

const ResumeBtn = () => {
    
  return (
    <div>
    <motion.h1
        className="relative pr-6 py-3 w-fit text-white text-lg font-semibold rounded-md bg-gray-900 overflow-hidden border-2 border-transparent"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "linear-gradient(90deg, #f97316, #14b8a6, #9333ea)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Hello 👋 , I am Arun Patel a Frontend Engineer
      </motion.h1>
    </div>
  )
}

export default ResumeBtn