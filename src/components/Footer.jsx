import React from 'react'
import { GiSniffingDog } from "react-icons/gi";

function Footer() {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'> 
            <GiSniffingDog size={40} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>NASUS</h1>
        </div>
    </div>
  )
}

export default Footer