import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyContextProvider } from './Context';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MyContextProvider>
  </React.StrictMode>,
);
