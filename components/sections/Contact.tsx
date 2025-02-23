"use client";
import Link from 'next/link';
import React from 'react'

const Contact = () => {
  return (
    <div className="pb-5 px-3 md:px-14" id="contact">
      <h2 className="py-10 flex justify-center left-0 top-[0px] dark:text-gray-100 font-bold text-xl md:text-4xl lg:text-4xl px-4 md:px-8 lg:px-10 leading-none dark:bg-black z-10">
        Contacts
      </h2>
      <div className='flex justify-center items-center pb-10'>
        <div className='max-w-2xl w-full text-gray-300 text-md'>
          <div className='flex flex-col sm:flex-row justify-between gap-2'>
            <Link href="mailto:arunpatel209@gmail.com" target='_blank' className='flex gap-3 items-center'>
              <span><i className="fa-solid fa-envelope"></i></span><span>arunpatel209@gmail.com</span>
            </Link>
            <div className='flex gap-3 items-center'>
              <span><i className="fa-solid fa-phone"></i></span><span>+91-9682030581</span>
            </div>
          </div>
          <div className='flex gap-3 items-center mt-2'>
            <span><i className="fa-solid fa-location-dot"></i></span>
            <span>Bangaluru, Karnataka</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact