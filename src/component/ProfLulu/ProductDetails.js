import React from 'react';

export default class ProductDetails extends React.Component {

  render(){
    const {name,price,quantity}=this.props.product;
    return (
      <div>
        <h1>{`Produto ${name}`}</h1>
        <p>{`Preço: ${price}`}</p>
        <p>{`Quantidade: ${quantity}`}</p>
      </div>
    );
  }
}
