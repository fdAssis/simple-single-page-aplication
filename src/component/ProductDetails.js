import React from 'react';

export default class ProductDetails extends React.Component {

  render(){
    return (
      <div>
        <h1>{`Produto ${this.props.name}`}</h1>
        <p>{`Preço: ${this.props.price}`}</p>
        <p>{`Quantidade: ${this.props.quant}`}</p>
      </div>
    );
  }
}
