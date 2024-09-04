import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { MainContextProvider } from './context/MainContext.jsx';
import { DialogContextProvider } from './context/DialogContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NextUIProvider>
      <MainContextProvider>
        <DialogContextProvider>
          <App />
        </DialogContextProvider>
      </MainContextProvider>
      <Toaster />
    </NextUIProvider>
  </BrowserRouter>
);
