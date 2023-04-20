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
    pathnames[1] === 'add-laptop' ||
    pathnames[1] === 'show-laptop' ||
    pathnames[1] === 'show-chipset' ||
    pathnames[1] === 'show-phone' ||
    pathnames[1] === 'show-image'
  ) {
    isActive = true;
  } else {
    isActive = false;
  }

  return (
    // <div className='w-[100%] h-[100%]'>
    //   <div className='max-h-full block w-[100%]'>
    //     <div className='flex'>
    //       <div className={` w-1/8 bg-purple-400 ${ isActive ? 'min-h-full' : 'h-[100dvh]'}`}>
    //         <Sidebar />
    //       </div>
    //       <div className='w-7/8 min-h-full w-full'>
    //         <Outlet />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
    </div>
  );
};
