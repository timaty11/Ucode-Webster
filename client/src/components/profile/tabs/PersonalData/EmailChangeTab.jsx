import React from 'react';

import InputField from '../../../common/form/InputField';

import $api from '../../../../../utils/api';
import apiClientRoutes from '../../../../routes/api/apiClientRoutes';


const EmailChangeTab = ({ userData }) => {
  const [errors, setErrors] = React.useState({ email: "" });
  const [submitData, setData] = React.useState({ email: "" });

  const handleDataSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await $api.patch(apiClientRoutes.userChangeEmail(userData.values.id), submitData);
      console.log(response);
      setData({ email: "" });
    } catch (e) {
      console.log(e.response.data);
      // setErrors({
      //   ...errors,
      //   ...e.response.data.errors.errors.reduce((acc, i) => {
      //     return {
      //       ...acc,
      //       [i.param]: i.msg,
      //     };
      //   }, {}),
      // });
    }
  }

  return (
    <div className="items-center justify-center content-center mx-[10%] py-[35%]">
      <form onSubmit={handleDataSubmit}>
        <InputField id="email" name="New email" type="text" data={submitData} setData={setData} errors={errors} setErrors={setErrors}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
        </InputField>

        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
      </form>
    </div>
  )
}

export default EmailChangeTab;
