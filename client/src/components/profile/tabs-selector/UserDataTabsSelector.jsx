import React from 'react';

import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

import ProfileDataTab from '../tabs/PersonalData/ProfileDataTab.jsx';
import EmailChangeTab from '../tabs/PersonalData/EmailChangeTab.jsx';
import PassChangeTab from '../tabs/PersonalData/PassChangeTab';

import '../../css/Profile.css';


const UserDataTabsSelector = ({ userData, setUserData }) => {
  return (
    <div className="my-4 flex flex-col"> 
      <div className="w-full flex flex-col">
        <div className="flex-1 py-3 px-6 bg-white rounded-lg shadow-xl dark:bg-dark-bg-800" data-carousel="static" id="indicators-carousel">
          {/* Tabs selector */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap text-sm font-medium text-center">
              <TabButton id="profile" slideNumber="1" active={true} category="userData" name="Personal Info" />
              <TabButton id="emailEdit" slideNumber="2" active={false} category="userData" name="Email" />
              <TabButton id="passEdit" slideNumber="3" active={false} category="userData" name="Password" />
            </ul>
          </div>

          {/* Tabs temselves */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <TabContent id="profile"><ProfileDataTab userData={userData} setUserData={setUserData} /></TabContent>
            <TabContent id="emailEdit"><EmailChangeTab userData={userData} setUserData={setUserData} /></TabContent>
            <TabContent id="passEdit"><PassChangeTab userData={userData} setUserData={setUserData} /></TabContent>
            <TabContent id="phantom1"></TabContent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDataTabsSelector;
