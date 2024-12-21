"use client";

import Button from '@/app/components/Button'
import React from 'react'

const Page = () => {
  return (
    <div className="h-full px-7 py-4">
      <h1 className="text-3xl font-bold pb-4">Contacts</h1>
      <hr className="mb-8" />
      {/* dfd */}
      <div className='flex flex-col sm:flex-row justify-between gap-2'>
        <div className='text-xl flex gap-3 items-center'>
          <span><i className="fa-solid fa-envelope"></i></span><span>arunpatel209@gmail.com</span>
        </div>
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
        <Button title='Submit' onClick={() => {}} />
      </form>
    </div>
  )
}

export default Page