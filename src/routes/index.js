import React from 'react';
import {Switch, Route} from 'react-router-dom';

import EditProduct from '../component/Edit_Product';
import homepage from '../component/Homepage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={homepage} />
    <Route path="/edit" exact component={EditProduct} />
  </Switch>
);

export default Routes;