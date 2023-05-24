import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

export const SectionContainer = ({ product, page }) => {
  const location = useLocation();
  const navigate = useNavigate();

  //get type of the product
  const arr = location.pathname.split('/').filter((item) => item !== '');
  let type = arr[0];

  //change spacing on url from '%20' to '-'
  let productName = product.name;

  const localizeName = (name) => {
    if (!name) return;
    let locallize_name = name.replace(/\s+/g, '-');
    return locallize_name;
  };
  const url_name = localizeName(productName);

  const url = `/${type}/comparisions/${url_name}`;

  return (
    <nav className='block h-8 fixed w-[100%] z-10 shadow-md bg-white'>
      <div className='pl-[10px] block overflow-x-clip overflow-y-hidden box-border h-8 mx-auto max-w-[1190px] relative whitespace-nowrap w-[100%] z-10'>
        <div className='block lg:pl-0'>
          <Link
            activeClass='active'
            spy={true}
            to='overviews'
            className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'
          >
            Overviews
          </Link>
          <button className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'>
            Prices
          </button>
          <button className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'>
            Reviews
          </button>
          <Link
            activeClass='active'
            spy={true}
            to='specs'
            className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'
          >
            Specs
          </Link>
        </div>

        {page === 'compare' ? (
          <div></div>
        ) : (
          <div className='absolute right-0 top-0 block'>
            <button
              className='bg-[#3c59fc] border-none text-white text-xs cursor-pointer h-8 outline-none px-4'
              to={`${url}`}
              onClick={() => navigate(url)}
            >
              <span>+</span>
              <span>Add to comparision</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
