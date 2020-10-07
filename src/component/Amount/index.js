import React, { useState } from 'react';
import './style.css';

const Amount = (props) => {
  const [c_value, setValue] = useState(0);

  function handleMinus() {
    if (c_value <= 0) {
      setValue(0);
    } else {
      setValue(c_value - 1);
      props.passChildData(c_value - 1);
    }
  }

  function handlePlus() {
    if (c_value >= props.max) {
      setValue(30);
    } else {
      setValue(c_value + 1);
      props.passChildData(c_value + 1);
    }
  }

  return (
    <>
      <div className="wrapper">
        <button type="button" className="plusminus" onClick={handleMinus}> - </button>
        <input type="number" className="num" value={c_value} />
        <button type="button" className="plusminus" onClick={handlePlus}>+</button>
      </div >
    </>
  );
};

export default Amount;