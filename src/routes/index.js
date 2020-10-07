import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AddProduct from '../component/Add_Product';
import listProd from  '../component/ListProduct/index';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={AddProduct} />
    <Route path="/listProd" exact component={listProd} />
  </Switch>
);

export default Routes;