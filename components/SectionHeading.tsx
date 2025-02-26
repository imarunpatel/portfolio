import React, { FC } from 'react'

interface Props {
    title: string;
}
const SectionHeading: FC<Props> = ({ title }) => {
  return (
    <div className='flex gap-2 items-end py-16 text-gray-300'>
        <h2 className="font-bold text-xl md:text-4xl lg:text-4xl leading-none z-10 whitespace-nowrap">
            {title}
        </h2>
        <div className='w-full rounded-md h-[4px] bg-gray-300 mb-1' />
    </div>
  )
}

export default SectionHeading