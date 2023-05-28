import React from 'react';

import InputField from '../../../common/form/InputField.jsx';

import $api from '../../../../../utils/api.js';
import apiClientRoutes from '../../../../routes/api/apiClientRoutes.js';


const PassChangeTab = ({ userData }) => {
  const [errors, setErrors] = React.useState({
    password: "",
    passwordConfirm: "",
    oldPassword: ""
  });

  const [submitData, setData] = React.useState({
    password: "",
    passwordConfirm: "",
    oldPassword: ""
  });
  // React.useEffect(() => {
  //   console.log(submitData);
  // }, [submitData]);

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      await $api.patch(apiClientRoutes.userChangePasswordPath(userData.values.id), submitData);
      setData({
        password: "",
        passwordConfirm: "",
        oldPassword: ""
      })
    } catch (e) {
      console.log(e.response);
      // 422 - старый пароль не совпадает
      // 400 - новый пароль не совпадает с подтвержденным
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
  }

  return (
    <div className="items-center justify-center content-center mx-[10%] py-[25%]">
      <form onSubmit={handleDataSubmit}>
        <InputField id="oldPassword" name="Old password" type="text" data={submitData} setData={setData} errors={errors} setErrors={setErrors}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z"></path>
            </svg>
          </div>
        </InputField>

        <InputField id="password" name="New password" type="text" data={submitData} setData={setData} errors={errors} setErrors={setErrors}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z"></path>
            </svg>
          </div>
        </InputField>

        <InputField id="passwordConfirm" name="Confirm" type="text" data={submitData} setData={setData} errors={errors} setErrors={setErrors}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" >
              <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"></path>
            </svg>
          </div>
        </InputField>

        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
      </form>
    </div>
  )
}

export default PassChangeTab;
