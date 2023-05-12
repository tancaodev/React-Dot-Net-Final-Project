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
      </div>
    </div>
    </>
  );
};
