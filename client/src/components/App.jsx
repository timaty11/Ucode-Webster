import React from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Common
import MainPage from './common/main-page/MainPage.jsx';
import Footer from './common/footer/Footer.jsx';


const App = () => {
  const token = localStorage.getItem('token');

  return (
    <I18nextProvider i18n={i18next}>
      {/* <UserContext.Provider value={{currentUser: userInfo?.values || 'guest'}}> */}
        <BrowserRouter>
          {/* <Header /> */}
          {/* <main className="flex-[1_0_auto] dark:bg-gray-900"> */}
          <main className="min-h-screen dark:bg-gray-900">
            <Routes>
              <Route path='/' element={ <MainPage /> } />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      {/* </UserContext.Provider> */}
    </I18nextProvider>
  );
}

export default App;
