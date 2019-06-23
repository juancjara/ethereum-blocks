import React, { useState, useEffect } from 'react';
import { Info, Main, AppView, ToastHub, LoadingRing } from '@aragon/ui';
import { BrowserRouter } from 'react-router-dom';
import web3 from './web3';

import Routes from './Routes';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      web3.setUp();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <LoadingRing />;

  if (error) return <Info.Alert>{'error'}</Info.Alert>;

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
