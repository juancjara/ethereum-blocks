import React from 'react';
import { Main, AppView, AppBar } from '@aragon/ui';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

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
