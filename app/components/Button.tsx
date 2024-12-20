'use client';

import React, { FC } from 'react'


interface Props {
    onClick: () => void
}
const Button: FC<Props> = (props) => {
  return (
    <button className='bg-violet-600 w-fit px-6 py-2 text-white font-semibold text-mg' onClick={props.onClick}>
        Download Resume
    </button>
  )
}

export default Button