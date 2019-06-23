import React from 'react';
import { Main, AppView, ToastHub } from '@aragon/ui';
import { BrowserRouter } from 'react-router-dom';
import web3 from './web3';

import Routes from './Routes';

web3.setUp();

const App = () => {
  return (
    <Main>
      <ToastHub timeout={2000}>
        <BrowserRouter>
          <AppView appBar={<div />}>
            <Routes />
          </AppView>
        </BrowserRouter>
      </ToastHub>
    </Main>
  );
};

export default App;
