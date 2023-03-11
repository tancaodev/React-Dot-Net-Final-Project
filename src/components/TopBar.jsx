import React from 'react';
import { GiSniffingDog } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };

  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <a href='/' className='flex items-center border-none'>
        <GiSniffingDog size={40} className='text-[var(--primary-dark)] mr-2' />
        <h1 className='text-xl font-bold text-gray-700'>NASUS</h1>
      </a>
      <div className='flex'>
        <button onClick={routeChange}>Login</button>
      </div>
    </div>
  );
}

export default TopBar;
