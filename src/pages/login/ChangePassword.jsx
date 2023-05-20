import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [errors, setError] = useState({});
  
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
   
    if (id === 'password') {
      setPassword(value);
    }
    if (id === 'newPassword') {
      setNewPassword(value);
    }
    if (id === 'confirmNewPassword') {
      setNewPassword(value);
    }
  };

  const url = 'https://localhost:44345/api/authenticate/change-password';

  const handleSubmit = (e) => {
    e.preventDefault();

    let user_password = {
      old_password: password,
      new_password: newPassword,
      confirm_new_password: ''
    };

    changePassword(user_password);
  };

  const handleError = (error) => {
    let errors = {
      old_password: error.Email || '',
      new_password: error.Password || '',
      confirm_new_password: '',
      error: '',
    };

    if (confirmNewPassword === '') {
      errors.confirm_new_password = 'The Confirm Password field is required';
    }

    if (confirmNewPassword !== newPassword) {
      errors.confirm_new_password = 'Confirm new password must be same as new password';
    }

    setError(errors);
  }

  const changePassword = async (user) => {
    try {
      await axios.post(url, user).then((response) => {
        localStorage.setItem('jwtToken', response.data.token);
        toHomepage();
      });
    } catch (error) {
      handleError(error.response.data.errors)
    }
  };

  const toHomepage = () => {
    let path = `/`;
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
        {/* Change Password Form */}
        <div className='md:w-1/2 md:px-16 m-4'>
          <h2 className='font-bold text-2xl text-center'>CHANGE PASSWORD</h2>
          <p className='text-sm mt-4 text-center'>
            Anything you need to know, <br />
            let us show you
          </p>
          <form action='' className='flex flex-col gap-4 mt-3'>
            <div className='relative my-4 border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='password'
                placeholder=' '
                id='password'
                value={password}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Current Password
              </label>
            </div>
            <div className='relative mb-4 border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='password'
                name='new password'
                placeholder=' '
                id='newPassword'
                value={newPassword}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                New Password
              </label>
            </div>

            <div className='relative mb-4 border-b-2 focus-within:border-blue-500'>
              <input
                className='block w-full appearance-none focus:outline-none'
                type='password'
                name='password'
                placeholder=' '
                id='confirmNewPassword'
                value={confirmNewPassword}
                onChange={(e) => handleInputChange(e)}
              />
              <label className='absolute top-0 duration-300 origin-0 pointer-events-none text-[#5B5656]'>
                Confirm Password
              </label>
            </div>

            <button
              type='button'
              className='mt-3 rounded-lg border-black border p-1 hover:bg-blue-500 hover:text-white'
              onClick={handleSubmit}
            >
              SAVE CHANGE
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};
