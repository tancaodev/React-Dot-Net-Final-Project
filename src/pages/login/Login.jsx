import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  let navigate = useNavigate();
  
  const routeChange = () => {
    let path = `/admin`;
    navigate(path);
  };

  return (
    <div className='bg-gradient-to-r from-slate-400 to-purple-400 bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center'>
      {/* Gradient background: bg-gradient-to-b from-[#6596E3] */}
      <div className='bg-white flex rounded-2xl shadow-lg max-w-4xl p-5 items-center'>
        {/* White Spacing */}
        <div className='md:block hidden w-1/2 '>
          <img
            src='https://images.unsplash.com/photo-1609692814859-9ebe00526a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            alt='/'
            className='rounded-2xl'
          />
        </div>
        {/* Login Form */}
        <div className='md:w-1/2 md:px-16 m-4'>
          <h2 className='font-bold text-2xl text-center'>LOGIN</h2>
          <p className='text-sm mt-4 text-center'>
            Anywhere you need, let us handle
          </p>
          <form action='' className='flex flex-col gap-4 mt-3 '>
            <div className='relative my-4 border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='text'
                name='studentID'
                placeholder=' '
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Username
              </label>
            </div>
            <div className='relative border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='password'
                name='password'
                placeholder=' '
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Password
              </label>
            </div>

            <div className='mt-3 text-[10px] flex justify-between lg:text-[12px]'>
              <div className='flex text-justify'>
                <input type='checkbox' className='mr-1' />
                <span>Remember me</span>
              </div>
              <a href='#none'>Forgot your password ?</a>
            </div>

            <button className='mt-3 rounded-lg' onClick={routeChange}>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};
