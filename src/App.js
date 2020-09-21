import React from 'react';
import logo from './logo.svg';
import './App.css';
import {saveProduct,getProduct,updateProduct,listProducts, deleteProduct} from './database.js';
import Product from './entity/Product.js';
import ProductDetails from './component/ProductDetails.js';
import ProductList from './component/ProductList.js';
import ProductAddEdit from './component/ProductAddEdit.js';



function App() {
  // let p=new Product({name:'Prod1',price:20.99,quantity:3});
  // saveProduct(p);

  // getProduct('qzBpI7IeVtly7UQUTLb3').then(p=>console.log(p));

  // getProduct('vlGSToMDthYKMVl6Lfa7').then(p=>{
  //   p.name="UpdateTest";
  //   updateProduct(p);
  // });

  // listProducts().then(list=>console.log(list));

  // deleteProduct('m0vNwi4VuxyPuhVJUurd');

  //************

  // let p=new Product({name:'Teste 1',price:100,quantity:10});
  // return (<ProductDetails name={p.name} price={p.priceLabel} quant={p.quantity}/>);



  // let p1=new Product({name:'Teste 1',price:0.99,quantity:30});
  // let p2=new Product({name:'Teste 2',price:253.55,quantity:17});
  // let prods=[p1,p2];
  // return (<ProductList products={prods}/>);

  let p1=new Product({name:'Teste 1',price:0.99,quantity:3});
  return (<ProductAddEdit product={p1}/>);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
