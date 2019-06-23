import React from 'react';
import Loadable from 'react-loadable';
import { LoadingRing } from '@aragon/ui';
import { Switch, Route } from 'react-router-dom';

const Loading = ({ pastDelay }) => (pastDelay ? <LoadingRing /> : null);

const LatestBlocks = Loadable({
  loader: () => import('./pages/LatestBlocks'),
  delay: 300,
  loading: Loading
});

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LatestBlocks} />
    </Switch>
  );
};

export default Routes;
