import React from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Common
import MainPage from './common/main-page/MainPage.jsx';
import UserProfilePage from './profile/UserProfilePage.jsx';
import PageNotFound from './common/PageNotFound.jsx';
import Header from './common/header/Header.jsx';
import Footer from './common/footer/Footer.jsx';

// Auth
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import EmailConfirm from './auth/EmailConfirm.jsx';
import PassReset from './auth/PassReset.jsx';

import UserContext from '../context/UserContext.js';
import { useUserProfile } from '../../hooks/user/useUserProfile.js';
import clientRoutes from '../routes/client/clientRoutes.js';


const App = () => {
  const token = localStorage.getItem('token');
  const { isLoading, userInfo, isError } = !token ? { isLoading: false, userInfo: { values: 'guest' } }: useUserProfile();

  return (
    <I18nextProvider i18n={i18next}>
      <UserContext.Provider value={{currentUser: userInfo?.values || 'guest'}}>
        <BrowserRouter>
          <Header />
          {/* <main className="flex-[1_0_auto] dark:bg-gray-900"> */}
          <main className="min-h-screen dark:bg-gray-900">
            <Routes>
              <Route path='/' element={ <MainPage /> } />
              
              <Route path={clientRoutes.loginPagePath()} element={<Login />} />
              <Route path={clientRoutes.registerPagePath()} element={<Register />} />
              <Route path={clientRoutes.confirmEmailPagePath()} element={<EmailConfirm />} />
              <Route path={clientRoutes.passResetPagePath()} element={<PassReset />} />
              <Route path={clientRoutes.profilePagePath()} element={<UserProfilePage />} />

              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </I18nextProvider>
  );
}

export default App;
