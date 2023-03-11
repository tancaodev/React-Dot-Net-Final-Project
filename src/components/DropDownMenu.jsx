export const DropDownMenu = () => {
  return (
    <nav className='bg-black text-white'>
      <div className='max-w-7xl h-[64px] flex justify-between items-center mx-auto relative'>
        <a href='/' className='font-bold text-3xl logo'>
          NASUS
        </a>
        <ul className='flex font-semibold'>
          <li>
            <a href='/categories' className='menu-item'>
              CATEGORIES
            </a>
          </li>
          <li className='group'>
            <a href='/cpus' className='menu-item'>
              CPUS
            </a>
            <div
              className='grid grid-cols-4 w-full p-5 absolute top-full left-0 bg-black mt-14 opacity-0 invisible
              group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500'
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
          <li className='group relative'>
            <a href='/smartphones' className='menu-item'>
              SMARTPHONES
            </a>
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
            <a href='/laptops' className='menu-item'>
              LAPTOPS
            </a>
          </li>
        </ul>
        <ul className='flex font-semibold'>
          <li>
            <a href='#none' className='menu-item'>
              ACCOUNT
            </a>
          </li>
          <li>
            <a href='#none' className='menu-item'>
              ABOUT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
