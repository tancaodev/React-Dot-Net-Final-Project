import React from 'react';
import { GiSniffingDog } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

export const TopBar = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };

  return (
    <div className='flex justify-between items-center px-4 py-2 border-b'>
      <a href='/' className='flex items-center logo'>
        <GiSniffingDog size={40} className='text-[var(--primary-dark)] mr-2' />
        <h1 className='text-xl font-bold text-gray-700'>NASUS</h1>
      </a>
    </div>
  );
}
