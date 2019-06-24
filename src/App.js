import React, { useState, useEffect } from 'react';
import { Info, AppView, LoadingRing } from '@aragon/ui';

import web3 from './web3';
import Providers from './Providers';
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
    <Providers>
      <AppView appBar={<div />}>
        <Routes />
      </AppView>
    </Providers>
  );
};

export default App;
