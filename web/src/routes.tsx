import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './screens/Landing';
import OrphanagesMap from './screens/OrphanagesMap';
import CreateOrphanage from './screens/CreateOrphanage';
import Orphanage from './screens/Orphanage';

import  {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Routes(){
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Switch>
        <Route path="/" component= { Landing } exact={true} />
        <Route path="/app" component= { OrphanagesMap } exact={true} />
        <Route path="/orphanages/create" component= { CreateOrphanage } exact={true} />
        <Route path="/orphanages/:id" component= { Orphanage } exact={true} />
      </Switch>
    </BrowserRouter>
  ); 
}

export default Routes;