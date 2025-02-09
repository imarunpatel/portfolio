'use client';

import Link from 'next/link';
import React from 'react'

const DownloadResumeBtn = () => {

  return (
    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" download="Arun_Resume.pdf" className='bg-violet-700 w-fit px-6 py-2 text-white font-semibold text-mg'>
        Download Resume
    </Link>
  )
}

export default DownloadResumeBtn