import React from 'react';
import {Link} from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

import ListProduts from '../ListProduct';

import './style.css';

const Homepage = () => (
  <div id="principal">
    <div id="menu">
      <div id="logo">
        <h2>
          <FiShoppingCart/>
          ZeBudega
        </h2>
      </div>
      <div id="links">
          <Link className="compLink">Home</Link>
          <Link className="compLink">Adicionar</Link>
      </div>
    </div>

    <ListProduts/>
  </div>
)

export default Homepage;