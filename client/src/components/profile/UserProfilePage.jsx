import React from 'react';

import ProfileHead from './ProfileHead.jsx';
import UserDataTabsSelector from './tabs-selector/UserDataTabsSelector.jsx';
import Spinner from '../common/Spinner.jsx';
import Popup from '../common/popup/Popup.jsx';

import '../css/Profile.css';
import { useUserProfile } from '../../../hooks/user/useUserProfile.js';

import UserContext from '../../context/UserContext.js';


const UserProfilePage = () => {
  // const [userData, setUserData] = React.useState(data);
  const { userInfo, isLoading } = useUserProfile();
  const { currentUser } = React.useContext(UserContext);
  const [userData, setUserData] = React.useState(currentUser);
  const [popupContent, setPopupContent] = React.useState();
  const [popupActive, setPopupActive] = React.useState(false);
  console.log(currentUser.currentUser);

  return (
    <div>
      <Popup active={popupActive} setActive={setPopupActive}>
        { popupContent }
      </Popup>

      <div className="h-full bg-gray-200 p-8 dark:bg-dark-bg-900">
        <ProfileHead userData={{ values: currentUser }} />

        <div className="flex w-full">
          <div className="h-full w-[40%] mr-[1%]"><UserDataTabsSelector userData={{ values: userData }} setUserData={setUserData} /></div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
