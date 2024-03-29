import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//icons
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ImWarning } from 'react-icons/im';

//validation

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setError] = useState({});

  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'password') {
      setPassword(value);
    }
  };

  const url = 'https://localhost:44345/api/authenticate/login';

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: email,
      password: password,
    };

    login(user);
  };

  const handleError = (error) => {
    let errors = {
      email: error.Email || '',
      password: error.Password || '',
      error: '',
    };

    if (error.Email === undefined && error.Password === undefined) {
      errors.error = error;
    }

    setError(errors);
  }

  const login = async (user) => {
    try {
      await axios.post(url, user).then((response) => {
        console.log(response);
        localStorage.setItem('jwtToken', response.data.token);
        toHomepage();
      });
    } catch (error) {
      handleError(error.response.data.errors)
    }
  };


  const toHomepage = () => {
    let path = `/`;
    navigate(path, { replace: true});
  };

  const toRegister = () => {
    let path = `/register`;
    navigate(path);
  };

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
          <h2 className='font-bold text-2xl text-center'>LOGIN TO NASUS</h2>
          <p className='text-sm mt-4 text-center'>
            Anything you need to know, <br />
            let us show you
          </p>
          <form action='' className='flex flex-col gap-4 mt-3 '>
            <div className='relative my-4 border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='email'
                name='studentID'
                placeholder=' '
                id='email'
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Email
              </label>
            </div>
            <div className='relative border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='password'
                name='password'
                placeholder=' '
                id='password'
                value={password}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Password
              </label>
            </div>

            {Object.keys(errors).length > 0 ? (
              <div className='flex justify-start items-center bg-red-100 rounded-lg p-4'>
                <span className='items-center'>
                  <ImWarning
                    size={20}
                    className='text-red-500 mr-2 align-text-bottom'
                  />
                </span>
                <div className='text-red-500 max-w-[250px] w-full text-xs'>
                  {errors.email ? <p>{errors.email[0]}</p> : <></>}
                  {errors.password ? <p>{errors.password[0]}</p> : <></>}
                  {errors.error ? <p>{errors.error}</p> : <></>}
                </div>
              </div>
            ) : (
              <div className='hidden'></div>
            )}

            <div className='my-4 text-[10px] flex justify-between lg:text-[12px]'>
              <div className='flex text-justify'>
                <input type='checkbox' className='mr-1' />
                <span>Remember me</span>
              </div>
              <a href='#none' className='transition-all duration-500 hover:text-[13px] hover:leading-none
              hover:text-blue-500'>Forgot your password ?</a>
            </div>

            <button
              type='submit'
              className='mt-3 rounded-lg border-black border p-1 hover:bg-blue-500 hover:text-white'
              onClick={handleSubmit}
            >
              LOGIN
            </button>

            <div className='text-center uppercase'>
              <p>---------Join with us---------</p>
            </div>
            <button
            type='button'
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
