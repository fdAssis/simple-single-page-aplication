import React from 'react';

export default class ProductList extends React.Component {

  render(){
    return (
      <div>
        {
          this.props.products.map(prod =>{
          return(
            <div>
              <h1>{prod.name}</h1>
              <p>{`Preço: ${prod.priceLabel}`}</p>
              <p>{`Quantidade: ${prod.quantity}`}</p>
              <p>-----------------------------</p>
            </div>
          )
          })
        }
      </div>
    );
  }
}
