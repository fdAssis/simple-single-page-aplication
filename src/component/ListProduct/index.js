import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi'

import './style.css'

import Api from '../../services/firebase';

const ListProduct = () => {


  return (<>
    <div id="list">
      <a href="teste">
        <img
          src="https://avatars1.githubusercontent.com/u/43320138?s=460&u=83e00cc7d76057e6eee42c085c444b47f16d87fa&v=4"
          alt="Francisco"
        />
        <div >
          <strong>francisco/repository</strong>
          <p>Aqui tem uma descricoa</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </div>
  </>
  );
};

export default ListProduct;