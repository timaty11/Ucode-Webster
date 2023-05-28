import React from 'react';
import { useMutation } from 'react-query';

import Spinner from '../../../common/Spinner.jsx';
import ProfileDataRow from './ProfileDataRow.jsx';
import ProfileDataInputRow from './ProfileDataInputRow.jsx';

import { UsersService } from '../../../../../services/users.service.js';


const ProfileDataTab = ({ userData, setUserData }) => {
  console.log(userData)
  let temp = {};
  Object.keys(userData.values).forEach((key, i) => {
    temp[key] = "";
  });

  const [errors, setErrors] = React.useState(temp);
  const [submitData, setSubmitData] = React.useState(userData.values);
  const [editActive, setEditActive] = React.useState(false);
  
  const { isLoading, mutateAsync } = useMutation('change info user', (data) => UsersService.updateInfoUser(data), {
    onSuccess: () => {
      setUserData({ values: submitData });
      setEditActive(!editActive);
    },
    onError: (err) => {
      setErrors({
        ...errors,
        ...err.response.data.errors.errors.reduce((acc, i) => {
          return {
            ...acc,
            [i.param]: i.msg,
          };
        }, {})
      })
    }
  });

  const editButtonHandle = () => {
    console.log("edit epta nado");
    setEditActive(true);
  };

  const saveButtonHandle = () => {
    console.log("save epta nado");
    // await mutateAsync(submitData);
    setEditActive(false);
  };

  const editCancelButtonHandle = () => {
    console.log("cancel epta nado");
    setEditActive(false);
  }
  
  return (
    <div>
      <div className="flex items-center">
        <h4 className="text-xl pr-3 text-gray-900 font-bold dark:text-dark-text-300">Personal Info</h4>
        <div className="flex items-center">
          {/* Submit button */}
          <button onClick={ editActive ? saveButtonHandle : editButtonHandle } className={`flex p-1.5 mr-2 transition-all duration-300 ${editActive ? "rounded-3xl bg-blue-500 text-white hover:bg-blue-600" : "rounded hover:bg-gray-200 text-blue-600"}`}>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 23 23" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" >
              {
                editActive ?
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /> :
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              }
            </svg>
          </button>

          {/* Cancel changes button */}
          <button onClick={ editCancelButtonHandle } className={`flex p-1.5 transition-all duration-300 ${!editActive ? "hidden" : ""} hover:rounded-3xl hover:bg-gray-200 text-gray-400`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 23 23" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <ul className="mt-2 text-gray-700">
        {
          editActive ? (
            <div>
              <ProfileDataInputRow id="login" name="Login:" value={userData.values.login} data={submitData} setData={setSubmitData} errors={errors} setErrors={setErrors} />
              <ProfileDataInputRow id="first_name" name="First name:" value={userData.values.first_name} data={submitData} setData={setSubmitData} errors={errors} setErrors={setErrors} />
              <ProfileDataInputRow id="second_name" name="Second name:" value={userData.values.second_name} data={submitData} setData={setSubmitData} errors={errors} setErrors={setErrors} />
              <ProfileDataInputRow id="last_name" name="Last name:" value={userData.values.last_name} data={submitData} setData={setSubmitData} errors={errors} setErrors={setErrors} />
              <ProfileDataRow id="phone_number" name="Mobile:" value={userData.values.phone_number} />
              <ProfileDataRow id="email" name="Email:" value={userData.values.email} />
              {/* <button onClick={submitButtonHandle} disabled={isLoading} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save changes</button> */}
            </div>
          ) : (
            <div>
              <ProfileDataRow id="login" name="Login:" value={userData.values.login} />
              <ProfileDataRow id="first_name" name="First name:" value={userData.values.first_name} />
              <ProfileDataRow id="second_name" name="Second name:" value={userData.values.second_name} />
              <ProfileDataRow id="last_name" name="Last name:" value={userData.values.last_name} />
              <ProfileDataRow id="phone_number" name="Mobile:" value={userData.values.phone_number} />
              <ProfileDataRow id="email" name="Email:" value={userData.values.email} />
            </div>
          )
        }
      </ul>
    </div>
  )
}

export default ProfileDataTab;


// {
//   editActive ? (
//     <div className="flex">
//       {/* Submit button */}
//       <button onClick={ saveButtonHandle } className="flex p-1.5 mr-2 bg-blue-500 rounded-3xl hover:bg-blue-600 transition-all duration-300 text-white">
//         <svg className="h-5 w-5" fill="none" viewBox="0 0 23 23" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//         </svg>
//       </button>

//       {/* Cancel changes button */}
//       <button onClick={ saveButtonHandle } className="flex p-1.5 hover:rounded-3xl hover:bg-gray-200 transition-all duration-300 text-gray-400">
//         <svg className="h-5 w-5" fill="none" viewBox="0 0 23 23" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//     </div>
//   ) : (
//     <button onClick={ editButtonHandle } className="flex p-1.5 bg-blue-500 rounded hover:bg-blue-600 transition-all duration-300 text-white">
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 23 23" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//       </svg>
//     </button>
//   )
// }