import React, {useState} from 'react';
import { FiHome, FiPlus } from 'react-icons/fi'
import Lottie from 'react-lottie';
import animation from './assets/products.json';

import ListProduts from '../ListProduct';
import AddProducts from '../Add_Product'


import './style.css';
const Homepage = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  function getStepContent(step) {
    switch (step) {
      case 0: 
        return <ListProduts/>;
      case 1:
        return <AddProducts/>;
     default:
     throw new Error('teste step');
    }
  }

  const [activeStep, setActiveStep] = useState(0);

  const viewList = () => {
    setActiveStep(0);
  };

  const viewAdd = () => {
    setActiveStep(1);
  }

  return (
    <div>
      <header >
      <div className="animation">
        <Lottie 
        options={defaultOptions}
          height={100}
          width={100}
        />
      </div>


        <nav>
          <a className="link-component" onClick={viewList}>
            <FiHome size={30} />
            Inico
          </a>

          <a className="link-component" onClick={viewAdd}>
            <FiPlus size={30} /> 
            Adicionar produto
          </a>

        </nav>
      </header>

      <div id="body">
        {getStepContent(activeStep)}
      </div>
    </div>
  )

};

export default Homepage;