import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import InputField from '../common/form/InputField.jsx';
import EditForm from '../common/form/EditForm.jsx';
import SocialNetworkIcons from './SocialNetworkIcons.jsx';

import clientRoutes from '../../routes/client/clientRoutes.js';
import apiRoutes from '../../routes/api/apiClientRoutes.js';


const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = React.useState({
    login: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [errors, setErrors] = React.useState({
    login: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  React.useEffect(() => {
  }, [errors]);

  React.useEffect(() => {
  }, [userData]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiRoutes.registerPath(), userData);
      console.log(response);
      navigate(clientRoutes.mainPagePath());
    } catch (e) {
      console.log(e);
      setErrors({
        ...errors,
        ...e.response.data.errors.errors.reduce((acc, i) => {
          return {
            ...acc,
            [i.param]: i.msg,
          };
        }, {}),
      });
    }
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <section className="bg-gray-50 dark:bg-dark-bg-900">
        <EditForm formMessage="Create a new account">
          <InputField id="login" name="Your login" type="text" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-dark-text-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path>
              </svg>
            </div>
          </InputField>

          <InputField id="email" name="Email" type="email" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-dark-text-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
          </InputField>

          <InputField id="password" name="Password" type="password" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-dark-text-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"></path>
              </svg>
            </div>
          </InputField>

          <InputField id="passwordConfirm" name="Password Confirm" type="password" data={userData} setData={setUserData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-dark-text-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"></path>
              </svg>
            </div>
          </InputField>

          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300  bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">I have read the  </label>
                <a href={clientRoutes.fullRulesPagePath()} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">rules of service</a>
              </div>
            </div>
          </div>

          <button onClick={() => { console.log(userData) }} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Sign up
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-dark-text-400">
            Already have an account?{' '}
            <a href={clientRoutes.fullLoginPagePath()} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
          </p>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-96 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Or continue using</span>
          </div>         
          <SocialNetworkIcons />
        </EditForm>
      </section>
    </form>
  );
};

export default Register;
