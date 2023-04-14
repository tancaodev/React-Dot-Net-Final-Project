import React from 'react';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Admin = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '');

  let isActive = false;

  if (
    pathnames[1] === 'add-phone' ||
    pathnames[1] === 'add-chipset' ||
    pathnames[1] === 'add-laptop'
  ) {
    isActive = true;
  } else {
    isActive = false;
  }

  console.log(isActive);
  return (
    <div className='bg-gray-50'>
      <div className='max-h-full bg-gray-50 block w-[100%] max-w-[1440px]'>
        <div className='flex'>
          <div className={` w-1/8 bg-purple-400 ${ isActive ? 'min-h-full' : 'h-[100dvh]'}`}>
            <Sidebar />
          </div>
          <div className='w-7/8 min-h-full max-w-[1323px] w-full'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
