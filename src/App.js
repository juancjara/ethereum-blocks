import React from 'react';
import { Main, AppView, AppBar } from '@aragon/ui';
import { BrowserRouter } from 'react-router-dom';
import web3 from './web3';

import Routes from './Routes';

web3.setUp();

const App = () => {
  return (
    <Main>
      <BrowserRouter>
        <AppView appBar={<AppBar title="Aragon Test" />}>
          <Routes />
        </AppView>
      </BrowserRouter>
    </Main>
  );
};

export default App;
