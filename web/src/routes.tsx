import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './screens/Landing';

function Routes(){
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact={true} />
    </BrowserRouter>
  );
}

export default Routes;