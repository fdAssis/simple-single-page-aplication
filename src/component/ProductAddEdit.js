import React from 'react';
import NumberInput from './NumberInput.js';
import {saveProduct,updateProduct} from '../database.js';
import Product from "../entity/Product.js"


export default class ProductAddEdit extends React.Component {

  constructor(props){
    super(props);

    const {id,name,price,quantity} = this.props.product;

    this.state={
      id,
      name,
      quantity,
      price,
      msg:null
    };
  }

  save=()=>{
    const {id,name,price,quantity} = this.state;
    let p=new Product({id, name,price,quantity});

    if(id==undefined){
      saveProduct(p).then(prod=>this.setState({id:prod.id}));
    }else{
      updateProduct(p);
    }
    this.setState({msg:'Produto salvo no banco de dados.'});
  }

  changeName=(event)=>{
    if(event.target.value.length>15) return;

    this.setState({name:event.target.value,msg:null});
  }

  changePrice=(event)=>{
    let num = event.target.value.replace(/\D/g, '');//only digits

    if(parseInt(num)<0) return;

    this.setState({price:num,msg:null});
  }

  render(){
    return (
      <div>
        {(this.state.msg)&&<div style={{color:'blue'}}>{this.state.msg}</div>}
          <b>Nome</b><br/>
          <input type="text" name="name" value={this.state.name} onChange={this.changeName}/><br/>
          <br/>

          <b>Preço</b><br/>
          <input type="text" name="price" value={this.state.price} onChange={this.changePrice}/><br/>
          <br/>

          <b>Quantidade</b><br/>
          <NumberInput value={this.state.quantity} max={10} onChange={(value)=>this.setState({quantity:value,msg:null})}/><br/>
        <button onClick={this.save}>Salvar</button>
      </div>
    );
  }
}
