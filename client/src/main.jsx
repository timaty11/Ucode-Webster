import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './components/App.jsx';

import './components/css/index.css';
// import './translations/i18n.js';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fullback="loading">
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Suspense>
  </React.StrictMode>
);
