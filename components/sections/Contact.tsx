"use client";
import Link from 'next/link';
import React from 'react'
import SectionHeading from '../SectionHeading';

const Contact = () => {
  return (
    <div id="contact" className="pb-5 px-3 md:px-14">
      <SectionHeading title='Contact Me.' />
      <address className='flex not-italic flex-col text-gray-300 leading-7'>
          <p className='flex gap-3 items-center'>
              <i className="fa-solid fa-envelope"></i>
              <Link href="mailto:arunpatel209@gmail.com" target='_blank'>arunpatel209@gmail.com</Link>
          </p>
          <p className='flex gap-3 items-center'>
            <i className="fa-solid fa-phone"></i><span>+91-9682030581</span>
          </p>
          <p className='flex gap-3 items-center'>
            <i className="fa-solid fa-location-dot"></i>
            <span>Bangaluru, Karnataka</span>
          </p>
      </address>
    </div>
  )
}

export default Contact