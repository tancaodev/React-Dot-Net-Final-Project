import { Link, useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { useAuth } from '../hooks/useAuth';
export const DropDownMenu = () => {
  let location = useLocation();

  const auth = useAuth();
  const username = auth.username;

  const isHomepage = () => {
    if (location.pathname === '/') {
      return (
        <div className='hidden ml-[2em]'>
          <form action='' className='relative'>
            <input type='text' />
            <span className='text-black absolute left-1'>Search</span>
            <BiSearch
              size={20}
              className='search absolute right-1 top-[2px] text-black'
            />
          </form>
        </div>
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <header className='block w-[100%] bg-purple-700 text-white fixed top-0 z-[100]'>
      <div className='flex items-center h-16 justify-between m-auto max-w-[1170px] w-[90%]'>
        <div className='flex items-center'>
          <div className='block self-center relative w-[95px]'>
            <Link to='/' className='text-2xl font-extrabold'>
              NASUS
            </Link>
          </div>

          <div className='ml-[3em]'>
            <Link to='/categories' className='p-[5px_0] link'>
              CATEGORIES
            </Link>
          </div>

          {isHomepage()}

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

        <div className='flex items-center '>
          <div>
            <Link to='/comparisions' className='p-[5px_0] link'>
              COMPARISIONS
            </Link>
          </div>

          <div>
            {username ? (
              <Link to='/login' className='p-[5px_0]  ml-[2em] link uppercase'>
                {username}
              </Link>
            ) : (
              <Link to='/login' className='p-[5px_0]  ml-[2em] link'>
                ACCOUNT
              </Link>
            )}
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
