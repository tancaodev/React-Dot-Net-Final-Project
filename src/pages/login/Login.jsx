import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Login = () => {
  let navigate = useNavigate();

  const toHomepage = () => {
    let path = `/`;
    navigate(path);
  };

  const toRegister = () => {
    let path = `/register`;
    navigate(path);
  }

  return (
    <div className='bg-gradient-to-r from-slate-400 to-purple-400 bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center'>
      {/* Gradient background: bg-gradient-to-b from-[#6596E3] */}
      <div className='bg-white flex rounded-2xl shadow-lg max-w-4xl p-5 items-center'>
        {/* White Spacing */}
        <div className='md:block hidden w-1/2 '>
          <div
            className='inline-block mb-4 cursor-pointer hover:text-blue-500'
            onClick={() => {
              navigate(-1);
            }}
          >
            <span>
              <AiOutlineArrowLeft className='inline mb-[2px] mr-1' />
            </span>
            <span>GO BACK</span>
          </div>

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

            <button
              className='mt-3 rounded-lg border-black border p-1 hover:bg-blue-500 hover:text-white'
              onClick={toHomepage}
            >
              LOGIN
            </button>

            <div className='text-center uppercase'>
              <p>---------Join with us---------</p>
            </div>
            <button
              className='mt-3 rounded-lg border-black border p-1 bg-gradient-to-tr from-yellow-500 to-purple-500 text-white hover:bg-gradient-to-tr hover:from-yellow-700 hover:to-purple-700'
              onClick={toRegister}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
