import React from 'react';
import { BiHomeAlt, BiChip } from 'react-icons/bi';
import { BsImages, BsPhone, BsLaptop } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className='sticky top-0'>
      <div>
        <ul>
          <li className='hover:bg-slate-400 hover:duration-500 p-0'>
            <Link className='m-0 flex w-[100%] h-[100%] p-4' to='/admin'>
              <span>
                <BiHomeAlt size={18} className='mr-1'/>
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li className='hover:bg-slate-400 hover:duration-500 p-0'>
            <Link className='m-0 flex w-[100%] h-[100%] p-4' to='/admin/add-image'>
              <span>
                <BsImages size={18} className='mr-1'/>
              </span>
              <span>Images</span>
            </Link>
          </li>
          <li className='hover:bg-slate-400 hover:duration-500 p-0'>
            <Link className='m-0 flex w-[100%] h-[100%] p-4' to='/admin/add-phone'>
              <span>
                <BsPhone size={18} className='mr-1'/>
              </span>
              <span>Phones</span>
            </Link>
          </li>
          <li className='hover:bg-slate-400 hover:duration-500 p-0'>
            <Link className='m-0 flex w-[100%] h-[100%] p-4' to='/admin/add-laptop'>
              <span>
                <BsLaptop size={18} className='mr-1'/>
              </span>
              <span>Laptops</span>
            </Link>
          </li>
          <li className='hover:bg-slate-400 hover:duration-500 p-0'>
            <Link className='m-0 flex w-[100%] h-[100%] p-4' to='/admin/add-chipset'>
              <span>
                <BiChip size={18} className='mr-1'/>
              </span>
              <span>Chipsets</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
