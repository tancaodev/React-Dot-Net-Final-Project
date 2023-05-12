import React from 'react';
import { Link } from 'react-router-dom';
import { GiSniffingDog } from 'react-icons/gi';

export const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
      <div className='flex items-center m-auto justify-center'>
        <GiSniffingDog size={40} className='text-[var(--primary-dark)] mr-2' />
        <h1 className='text-xl font-bold text-gray-700'>NASUS</h1>
      </div>

      <footer className='bg-[#161616] p-[1em_0] w-[100%]'>
        <div className='flex justify-between m-auto max-w-[1170px]'>
          <ul
            className='block relative w-[70%] text-white
            sm:flex'
          >
            <li className='sm:p-[0_1em] flex items-center text-lg'>

              <span>© 2023 NASUS.com</span>
            </li>
            <li className='sm:p-[0_1em] flex items-center text-lg'>
              
              <Link to='/about'>About us</Link>
            </li>
          </ul>
          <div className='flex items-center flex-col justify-around mt-[15px]'>
            <ul className='flex text-white'>
              <li>
                <a
                  aria-label='versus facebook page'
                  href='#none'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 320 512'
                    height='22'
                    width='22'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label='versus youtube channel'
                  href='#none'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 576 512'
                    height='22'
                    width='22'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label='versus twitter channel'
                  href='#none'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    role='img'
                    viewBox='0 0 24 24'
                    height='22'
                    width='22'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title></title>
                    <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  aria-label='versus instagram page'
                  href='#none'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 448 512'
                    height='22'
                    width='22'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
                  </svg>
                </a>
              </li>
            </ul>
            <div className='mt-[5px] sm:hidden'>
              <a href='#none'>
                <img
                  alt='Get it on Google Play'
                  src='https://images.versus.io/badges/en_get.png'
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
