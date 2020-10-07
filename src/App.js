import React from 'react';
import { BrowserRouter } from'react-router-dom';
import Router from './routes/index';

import './Styles/global.css'

const App = () => (
  <> 
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </>
);

export default App;