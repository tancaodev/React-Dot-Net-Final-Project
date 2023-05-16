import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

import { BiSearch } from 'react-icons/bi';
import { FaUserAlt, FaUserEdit } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { IoMdHelpCircle } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';

export const DropDownMenu = () => {
  const [active, setAcitve] = useState(false);
  const auth = useAuth();
  const username = auth.username;
  let menuRef = useRef();

  const menuToggle = (event) => {
    event.preventDefault()
    setAcitve((prevActive) => !prevActive);
  };

  const menuItemCSS = {
    menuLi: 'flex items-center p-[16px_0] border-t border-solid group',
    menuImg:
      'max-w-[20px] mr-2 opacity-50 transition-all duration-500 group-hover:opacity-100',
    menuLink:
      'group-hover:text-red-500 transition-all duration-500 inline-block text-[#555]',
  };

  const handleLogOut = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setAcitve(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <header className='block w-[100%] bg-black/80 text-white fixed top-0 z-[100]'>
      <div className='flex items-center h-16 justify-between m-auto max-w-[1170px] w-[90%]'>
        <div className='flex items-center'>
          <div className='block self-center relative w-[95px]'>
            <Link to='/' className='text-2xl font-extrabold'>
              NASUS
            </Link>
          </div>

          <div className='flex ml-[2em]'>
            <form action='' className='relative'>
              <input type='text' />
              <span className='text-black absolute left-1'>Search</span>
              <BiSearch
                size={20}
                className='search absolute right-1 top-[2px] text-black'
              />
            </form>
          </div>

          <div className='flex ml-[1.5em]'>
            <Link
              to='/cpus'
              className='relative cursor-pointer p-[5px_0] m-1 ml-[0.5em] link'
            >
              CPUS
            </Link>
            <Link
              to='/smartphones'
              className='relative cursor-pointer p-[5px_0] m-1 ml-[2em] link'
            >
              SMARTPHONES
            </Link>
            <Link
              to='/laptops'
              className='relative cursor-pointer p-[5px_0] m-1 ml-[2em] link'
            >
              LAPTOPS
            </Link>
          </div>
        </div>

        <div className='flex items-center'>
          <div>
            <Link to='/comparisions' className='p-[5px_0] link'>
              COMPARISIONS
            </Link>
          </div>

          <div ref={menuRef}>
            {username ? (
              <Link
                id='username'
                onClick={menuToggle}
                className='p-[5px_0] ml-[2em] link uppercase' 
              >
                {username}
              </Link>
            ) : (
              <Link to='/login' className='p-[5px_0] ml-[2em] link'>
                ACCOUNT
              </Link>
            )}
            <div
              className={`${
                active
                  ? 'mt-0 visible opacity-100'
                  : 'invisible mt-32 opacity-0'
              } absolute top-full border border-black
          right-32 w-[200px] p-[10px_20px] bg-[#fff] rounded-2xl transition-all duration-500 text-black
          before:content-[""] before:absolute before:top-[-5px] before:right-[28px] before:w-[20px] 
          before:h-[20px] before:bg-[#fff] before:rotate-45`}
            >
              <h3 className='flex text-base p-[20px_0] text-[#555]'>
                <div>
                  <span>Name: {username}</span>
                  <br />
                  <span className='text-sm text-[#cecece]'>ID: 123456</span>
                </div>
              </h3>
              <ul className=''>
                <li className={`${menuItemCSS.menuLi}`}>
                  <span>
                    <FaUserAlt size={20} className={`${menuItemCSS.menuImg}`} />
                  </span>
                  <a href='#none' className={`${menuItemCSS.menuLink}`}>
                    My Profile
                  </a>
                </li>
                <li className={`${menuItemCSS.menuLi}`}>
                  <span>
                    <FaUserEdit
                      size={20}
                      className={`${menuItemCSS.menuImg}`}
                    />
                  </span>
                  <a href='#none' className={`${menuItemCSS.menuLink}`}>
                    Edit Profile
                  </a>
                </li>
                <li className={`${menuItemCSS.menuLi}`}>
                  <span>
                    <AiFillSetting
                      size={20}
                      className={`${menuItemCSS.menuImg}`}
                    />
                  </span>
                  <a href='#none' className={`${menuItemCSS.menuLink}`}>
                    Settings
                  </a>
                </li>
                <li className={`${menuItemCSS.menuLi}`}>
                  <span>
                    <IoMdHelpCircle
                      size={20}
                      className={`${menuItemCSS.menuImg}`}
                    />
                  </span>
                  <a href='#none' className={`${menuItemCSS.menuLink}`}>
                    Help
                  </a>
                </li>
                <li className={`${menuItemCSS.menuLi}`}>
                  <span>
                    <BiLogOut size={20} className={`${menuItemCSS.menuImg}`} />
                  </span>
                  <a
                    href='/'
                    onClick={handleLogOut}
                    className={`${menuItemCSS.menuLink}`}
                  >
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
  {
    /* <div className='block fixed top-0 left-0 -z--1'>
        <nav className='bg-black text-white w-screen'>
          
          <div className='max-w-7xl h-[64px] lg:flex justify-between items-center mx-auto'>
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
      </div> */
  }
};
