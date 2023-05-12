import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from 'react-icons/fa';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white'>
      <ul className='hidden sm:flex px-4'>
        {/* <li>
          <NavLink to='/categories' className='link'>
            CATEGORIES
          </NavLink>
        </li>
        <li>
          <NavLink to='/cpus' className='link'>
            CPUS
          </NavLink>
        </li>
        <li>
          <NavLink to='/smartphones' className='link'>
            SMARTPHONES
          </NavLink>
        </li>
        <li>
          <NavLink to='/laptops' className='link'>
            LAPTOPS
          </NavLink>
        </li> */}
        <li>
          <NavLink to='/laptops' className='link'>
            ABOUT
          </NavLink>
        </li>
      </ul>

      <div className='flex justify-between'>
        <FaFacebookF className='mx-4' />
        <FaTwitter className='mx-4' />
        <FaGooglePlusG className='mx-4' />
        <FaInstagram className='mx-4' />
      </div>
      {/* Hamburger Icon */}
      <div className='sm:hidden z-10' onClick={handleNav}>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8'>
            <a href='/'>Home</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#gallery'>Gallery</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#deals'>Deals</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
