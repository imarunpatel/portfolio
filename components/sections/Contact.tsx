<<<<<<< HEAD:app/(pages)/contact/page.tsx
import Link from 'next/link';
=======
"use client";

import Button from '@/components/Button'
>>>>>>> e5af512 (UI Update):components/sections/Contact.tsx
import React from 'react'

const Contact = () => {
  return (
    <div className="h-full py-4">
      <h1 className="text-xl font-bold pb-4">Contacts</h1>
      <hr className="mb-8" />

      <div className='flex justify-center items-center h-full'>
        <div className='max-w-2xl w-full'>
          <div className='flex flex-col sm:flex-row justify-between gap-2'>
            <Link href="mailto:arunpatel209@gmail.com" target='_blank' className='text-xl flex gap-3 items-center'>
              <span><i className="fa-solid fa-envelope"></i></span><span>arunpatel209@gmail.com</span>
            </Link>
            <div className='text-xl flex gap-3 items-center'>
              <span><i className="fa-solid fa-phone"></i></span><span>+91-9682030581</span>
            </div>
          </div>
          <div className='text-xl flex gap-3 items-center mt-2'>
            <span><i className="fa-solid fa-location-dot"></i></span>
            <span>Bangaluru, Karnataka</span>
          </div>
          <form className='flex flex-col gap-4 items-end mt-6'>
            <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message..."></textarea>
            <button className='bg-violet-700 w-fit px-6 py-2 text-white font-semibold text-mg disabled:bg-violet-400' disabled>
                Submit
            </button>
          </form>
        </div>
      </div>
<<<<<<< HEAD:app/(pages)/contact/page.tsx
=======
      <div className='text-xl flex gap-3 items-center mt-2'>
        <span><i className="fa-solid fa-location-dot"></i></span>
        <span>Bangaluru, Karnataka</span>
      </div>
      <form className='flex flex-col gap-4 items-end mt-6'>
        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message..."></textarea>
        {/* <Button title='Submit' onClick={() => {}} /> */}
      </form>
>>>>>>> e5af512 (UI Update):components/sections/Contact.tsx
    </div>
  )
}

export default Contact