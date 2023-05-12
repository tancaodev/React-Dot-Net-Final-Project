import React from 'react';
import { TopBar } from '../../components/TopBar';
import { Footer } from '../../components/Footer';

export const About = () => {
  return (
    <>
    <TopBar />
    <div className='block m-0 p-0 box-border'>
      <div className='relative block p-0 overflow-hidden md:bg-about sm:p-[100px_40px] md:bg-no-repeat md:bg-left md:bg-100% lg:bg-50% lg:p-[80px_0] '>
        <div className='box-border p-[50px] float-right sm:w-[90%] bg-[#fdfdfd] md:p-[80px] lg:w-[55%]'>
          <h1 className='mb-[30px] text-[46px] font-black'>About Us</h1>
          <p className='mb-[10px] text-lg leading-[30px] text-justify [word-spacing:-2px] text-[#545454] font-sans'>
            Nasus has a young, dynamic, and fun team. In addition to the core
            team, about which you can read a bit below, we get help from many
            other folks: interns, freelance content creators, translators. Last
            but not least, the Media 1 team often supports us on various fronts,
            from design to sales.
          </p>
          <div className='flex justify-between font-bold text-[13px]'>
            <span>Web Design</span>
            <span>Photoshop & Illustrator</span>
            <span>Coding</span>
          </div>
        </div>
      </div>

      <div className='block p-[50px_0] bg-[#fdfdfd] overflow-hidden
      sm:bg-about_2 sm:bg-no-repeat sm:bg-right sm:bg-25%'>
        <div className='p-[50px] float-left bg-[#fdfdfd] w-[100%]
        sm:w-[55%]'>
          <h1 className='mb-[30px] text-4xl font-black'>
            Information Overload
          </h1>
          <p className='mb-[10px] text-lg leading-[30px] text-justify [word-spacing:-2px] text-[#545454] font-sans'>
            <br />
            Making the right choice when faced with an ever-growing number of
            options is a genuine challenge of our times. Gathering relevant and
            accurate data is no easy task: our brains are constantly overloaded
            with information, offers and possibilities. With new products and
            features to keep up with each day, making the choice that best suits
            one's needs demands a lot of time – and with possible bias from
            manufacturers and retailers, there is no guaranteed accuracy in what
            you'll find in your research.
          </p>
        </div>
      </div>

      <div className='block p-[50px_0] bg-[#fdfdfd] overflow-hidden
      md:bg-about_3 md:bg-no-repeat md:bg-left
      '>
        <div className='p-[50px] float-right bg-[#fdfdfd] w-[100%]
        md:p-[80px] md:w-[55%]'>
          <h1 className='mb-[30px] text-[46px] font-black'>Meet the team</h1>
          <h2 className='mb-[10px] text-[20px] font-bold font-sans'>
            Khoa Trinh
          </h2>
          <p className='mb-[10px] text-[18px] text-justify text-[#545454] font-sans'>
            Mr. Khoa Trinh
          </p>
          <h2 className='mb-[10px] text-[20px] font-bold font-sans'>
            Quan Nguyen
          </h2>
          <p className='mb-[10px] text-[18px] text-justify text-[#545454] font-sans'>
            Mr. Quan Nguyen
          </p>
          <h2 className='mb-[10px] text-[20px] font-bold font-sans'>Tan Cao</h2>
          <p className='mb-[10px] text-[18px] text-justify text-[#545454] font-sans'>
            Mr. Tan Cao
          </p>
        </div>
      </div>

      <div className='p-[0_10px]'>
        <div className='m-auto max-w-[1170px] w-[100%] pb-[50px]'>
          <div className='flex m-[10px_0]'>
            <h2
              className='text-[2em] m-[10px_0] pb-[10px] relative w-[50%]
            after:bg-black after:absolute after:bottom-0 after:left-0 after:content-[""] after:h-[1px] after:w-[40px]'
            >
              Top categories:
            </h2>
            <a
              href='/en/categories'
              rel='noopener noreferrer'
              target='_blank'
              className='font-bold text-base tracking-wide m-[auto_0_auto_auto] text-blue-500 hover:underline'
            >
              SEE ALL
            </a>
          </div>
          <div className='flex max-sm:flex-col justify-between '>
            <div className='block bg-gradient-to-bl from-[#7600e0] to-[#ff2de0] overflow-hidden relative w-[100%] mt-[10px] h-[130px]
            sm:w-[18%]'>
              <img
                src='https://images.versus.io/objects/dell-alienware-m18-18-qhd-plus-intel-core-i9-13900hx-2-2ghz-nvidia-geforce-rtx-4090-laptop-64gb-ram-4tb-ssd-4tb-ssd.front.variety.1679330589281.jpg'
                alt='Sony A7C'
                className='translate-x-[-165%] translate-y-[-85%] rotate-[-30deg] h-auto mix-blend-multiply absolute left-[50%] top-[50%] w-[40%] overflow-clip [overflow-clip-margin:content-box]'
              />
              <img
                src='https://images.versus.io/objects/dell-alienware-m18-18-qhd-plus-intel-core-i9-13900hx-2-2ghz-nvidia-geforce-rtx-4090-laptop-64gb-ram-4tb-ssd-4tb-ssd.front.variety.1679330589281.jpg'
                alt='Sony A7C'
                className='translate-x-[65%] translate-y-[-5%] rotate-[-30deg] h-auto mix-blend-multiply absolute left-[50%] top-[50%] w-[40%] overflow-clip [overflow-clip-margin:content-box]'
              />
              <div className='block cursor-pointer h-[250px]'>
                <a
                  href='/en/camera'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='h-[130px] text-[1.6em] text-[#fff] absolute text-center top-[35%] capitalize w-[100%]
                  sm:h-[250px]'
                >
                  Laptops
                </a>
              </div>
            </div>
            <div className='block bg-gradient-to-bl from-[#ff164b] to-[#ff5631] overflow-hidden relative w-[100%] mt-[10px] h-[130px]
            sm:w-[18%]'>
              <img
                src='https://images.versus.io/objects/apple-iphone-14-pro-max.front.variety.1662579719861.jpg'
                alt='Apple iPhone 14 Pro Max'
                className='translate-x-[-165%] translate-y-[-85%] rotate-[-30deg] h-auto mix-blend-multiply absolute left-[50%] top-[50%] w-[40%] overflow-clip [overflow-clip-margin:content-box]'
              />
              <img
                src='https://images.versus.io/objects/apple-iphone-14-pro-max.front.variety.1662579719861.jpg'
                alt='Apple iPhone 14 Pro Max'
                className='translate-x-[65%] translate-y-[-5%] rotate-[-30deg] h-auto mix-blend-multiply absolute left-[50%] top-[50%] w-[40%] overflow-clip [overflow-clip-margin:content-box]'
              />
              <div className='block cursor-pointer h-[250px]'>
                <a
                  href='/en/phone'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='h-[130px] text-[1.6em] text-[#fff] absolute text-center top-[35%]  capitalize w-[100%]'
                >
                  Smartphones
                </a>
              </div>
            </div>
            <div className='block bg-gradient-to-bl from-[#7600e0] to-[#3c59fc] overflow-hidden relative w-[100%] mt-[10px] h-[130px]
            sm:w-[18%]'>
              <img
                src='https://images.versus.io/objects/apple-m1-ultra.front.variety.1647448144172.jpg'
                alt='Huawei Watch 3 Pro'
                className='translate-x-[-165%] translate-y-[-85%] rotate-[-30deg] h-auto mix-blend-multiply absolute left-[50%] top-[50%] w-[40%] overflow-clip [overflow-clip-margin:content-box]'
              />
              <img
                src='https://images.versus.io/objects/intel-core-i9-13900ks.front.variety.1673754945127.jpg'
                alt='Huawei Watch 3 Pro'
                className='translate-x-[65%] translate-y-[-5%] rotate-[-30deg] h-auto mix-blend-multiply absolute left-[50%] top-[50%] w-[40%] overflow-clip [overflow-clip-margin:content-box]'
              />
              <div className='block cursor-pointer h-[250px]'>
                <a
                  href='/en/smartwatch'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='h-[130px] text-[1.6em] text-[#fff] absolute text-center top-[35%]  capitalize w-[100%]'
                >
                  CPUs
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='box-border m-auto max-w-[1170px] p-[0_10px]'>
          <h2 className='text-[1.3em] font-bold p-[10px_0] font-sans'>
            Contact us!
          </h2>
          <p className='text-[#313131] text-base font-normal font-sans'>
            You can get in touch via email at{' '}
            <a
              href='#none'
              rel='noopener noreferrer'
              target='_blank'
              className='underline text-purple-500'
            >
              office@nasus.com
            </a>
            ,{' '}
            <a
              href='#none'
              rel='noopener noreferrer'
              target='_blank'
              className='underline text-purple-500'
            >
              Facebook
            </a>
            , or{' '}
            <a
              href='#none'
              rel='noopener noreferrer'
              target='_blank'
              className='underline text-purple-500'
            >
              Twitter
            </a>
            .
          </p>
        </div>
        <Footer />
        <footer className='bg-[#161616] p-[1em_0] w-[100%]'>
          <div className='flex justify-between m-auto max-w-[1170px]'>
            <ul className='block relative w-[70%] text-white
            sm:flex'>
              <li className='sm:p-[0_1em] flex items-center'>
                <a href='http://urge.io/'>Imprint</a>
              </li>
              <li className='sm:p-[0_1em] flex items-center text-xs'>
                <a href='/privacypolicy'>Privacy policy</a>
              </li>
              <li className='sm:p-[0_1em] flex items-center text-xs'>
                <a href='/terms'>Terms and conditions</a>
              </li>
              <li className='sm:p-[0_1em] flex items-center text-xs'>
                <a href='/about-us'>About us</a>
              </li>
              <li className='sm:p-[0_1em] flex items-center text-xs'>
                <a href='/editorial-guidelines'>Editorial guidelines</a>
              </li>
              <li className='sm:p-[0_1em] flex items-center text-xs'>
                <a href='/en/news'>News</a>
              </li>
              <li className='sm:p-[0_1em] flex items-center text-xs'>
                <a href='/en/glossary'>Glossary</a>
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
    </div>
    </>
  );
};
