import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ImWarning } from 'react-icons/im';

export const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('male');
  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setError] = useState({});

  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'firstName') {
      setFirstName(value);
    }
    if (id === 'lastName') {
      setLastName(value);
    }
    if (id === 'gender') {
      setGender(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'userName') {
      setUsername(value);
    }
    if (id === 'password') {
      setPassword(value);
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const url = 'https://localhost:44345/api/authenticate/register';

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      firstName: firstName,
      lastName: lastName,
      gender: gender === 'male' ? true : false,
      email: email,
      userName: userName,
      password: password,
    };

    addNewUser(newUser);
  };

  const handleError = (error) => {
    let errors = {
      firstName: error.FirstName || '',
      lastName: error.LastName || '',
      email: error.Email || '',
      userName: error.UserName || '',
      password: error.Password || '',
      confirmPassword: '',
      error: '',
    };

    if (confirmPassword === '') {
      errors.confirmPassword = 'The Confirm Password field is required';
    }

    if (confirmPassword !== password) {
      errors.confirmPassword = 'Confirm password must be same as password';
    }

    if (
      error.FirstName === undefined &&
      error.LastName === undefined &&
      error.Email === undefined &&
      error.UserName === undefined &&
      error.Password === undefined
    ) {
      errors.error = error;
    }

    setError(errors);
  };

  const addNewUser = async (newUser) => {
    try {
      await axios.post(url, newUser).then((response) => {
        toLogin();
      });
    } catch (error) {
      handleError(error.response.data.errors);
    }
  };


  const toLogin = () => {
    let path = `/login`;
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
          <h2 className='font-bold text-2xl text-center'>REGISTER</h2>

          <form action='' className='flex flex-col gap-4 mt-3 '>
            <div className='relative mt-4 border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='text'
                name='firstName'
                placeholder=' '
                id='firstName'
                value={firstName}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                First Name
              </label>
            </div>
            <div className='relative mt-4 border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='text'
                name='lastName'
                placeholder=' '
                id='lastName'
                value={lastName}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Last Name
              </label>
            </div>
            <div className='relative mt-2 mb-3 focus-within:border-blue-500 w-[100%]'>
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Gender
              </label>
              <br />
              <select
                name='gender'
                id='gender'
                className='border w-full'
                value={gender}
                onChange={(e) => handleInputChange(e)}
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <div className='relative border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='email'
                name='email'
                placeholder=' '
                id='email'
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Email
              </label>
            </div>
            <div className='relative mt-4 border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='text'
                name='username'
                placeholder=' '
                id='userName'
                value={userName}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Username
              </label>
            </div>
            <div className='relative mt-4 border-b-2 focus-within:border-blue-500'>
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
            <div className='relative mt-4 border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='password'
                name='password'
                placeholder=' '
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Confirm Password
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
                  {errors.firstName ? <p>{errors.firstName[0]}</p> : <></>}
                  {errors.lastName ? <p>{errors.lastName[0]}</p> : <></>}
                  {errors.email ? <p>{errors.email[0]}</p> : <></>}
                  {errors.userName ? <p>{errors.userName[0]}</p> : <></>}
                  {errors.password ? <p>{errors.password[0]}</p> : <></>}
                  {errors.confirmPassword ? (
                    <p>{errors.confirmPassword}</p>
                  ) : (
                    <></>
                  )}
                  {errors.error ? <p>{errors.error}</p> : <></>}
                </div>
              </div>
            ) : (
              <div className='hidden'></div>
            )}

            <button
              type='button'
              className='mt-3 rounded-lg border-black border p-1 hover:bg-blue-500 hover:text-white'
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
