import React from 'react';
import { Main, ToastHub } from '@aragon/ui';
import { BrowserRouter } from 'react-router-dom';

const Providers = ({ children }) => {
  return (
    <Main>
      <ToastHub timeout={2000}>
        <BrowserRouter>{children}</BrowserRouter>
      </ToastHub>
    </Main>
  );
};

export default Providers;
