import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center dark:bg-black neuton dark:text-gray-100 px-14 h-14'>
        <nav className='flex gap-8'>
            <div className='text-xl font-bold'>
                Welcome
            </div>
            <div className='text-xl font-bold'>
                Experience
            </div>
        </nav>
    </header>
  )
}

export default Header