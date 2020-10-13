import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Landing from './screens/Landing';
import OrphanagesMap from './screens/OrphanagesMap';

function Routes(){
  return (
    <BrowserRouter>
      <Route path="/" component= { Landing } exact={true} />
      <Route path="/app" component= { OrphanagesMap } exact={true} />
    </BrowserRouter>
  );
}

export default Routes;