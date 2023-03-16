import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export const DropDownMenu = () => {
  return (
    <div className='fixed top-0 left-0 -z--1'>
      <nav className={`bg-black text-white w-screen`}>
        <div className='max-w-7xl h-[64px] flex justify-between items-center mx-auto'>
          <Link to='/' className='font-bold text-3xl logo'>
            NASUS
          </Link>
          <ul className='flex font-semibold dropdown'>
            <li className='group'>
              <Link to='/categories' className='menu-item link'>
                CATEGORIES
              </Link>
              <div
                className='grid grid-cols-4 w-full p-5 absolute top-full left-0 bg-black mt-14 opacity-0 invisible
              group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500 group-hover:-z--1'
              >
                <ul className='p-2'>
                  <li className='mega-sub-item-title'>Product category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                </ul>
                <ul className='p-2'>
                  <li className='mega-sub-item-title'>Product category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                </ul>
                <ul className='p-2'>
                  <li className='mega-sub-item-title'>Product category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                </ul>
                <ul className='p-2'>
                  <li className='mega-sub-item-title'>Product category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                  <li className='mega-sub-item'>Sub category</li>
                </ul>
              </div>
            </li>
            <li className='group'>
              <Link to='/cpus' className='menu-item link'>
                CPUS
              </Link>
              
            </li>
            <li className='group relative'>
              <Link to='/smartphones' className='menu-item link'>
                SMARTPHONES
              </Link>
              <div
                className='absolute left-0 top-full bg-black w-max mt-14 opacity-0 invisible
              group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500'
              >
                <ul>
                  <li className='mega-sub-item'>
                    <a href='#none' className='hover:text-black'>
                      Dropdown menu
                    </a>
                  </li>
                  <li className='mega-sub-item'>
                    <a href='#none' className='hover:text-black'>
                      Dropdown menu
                    </a>
                  </li>
                  <li className='sub-dropdown relative mega-sub-item'>
                    <a href='#none' className=' hover:text-black'>
                      Dropdown menu
                    </a>
                    <ul className='sub-dropdown-content absolute left-full top-full bg-black text-white w-max opacity-0 invisible transition-all duration-500'>
                      <li className='mega-sub-item'>
                        <a href='#none' className='hover:text-black'>
                          Sub dropdown menu
                        </a>
                      </li>
                      <li className='mega-sub-item'>
                        <a href='#none' className='hover:text-black'>
                          Sub dropdown menu
                        </a>
                      </li>
                      <li className='mega-sub-item'>
                        <a href='#none' className='hover:text-black'>
                          Sub dropdown menu
                        </a>
                      </li>
                      <li className='mega-sub-item'>
                        <a href='#none' className='hover:text-black'>
                          Sub dropdown menu
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='mega-sub-item'>
                    <a href='#none' className='hover:text-black'>
                      Dropdown menu
                    </a>
                  </li>
                  <li className='mega-sub-item'>
                    <a href='#none' className='hover:text-black'>
                      Dropdown menu
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to='/laptops' className='menu-item link'>
                LAPTOPS
              </Link>
            </li>
          </ul>
          <ul className='flex font-semibold'>
            <li>
              <Link to='#none' className='menu-item link'>
                ACCOUNT
              </Link>
            </li>
            <li>
              <Link to='#none' className='menu-item link'>
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
