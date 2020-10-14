import React, { useState } from 'react';

import {Link} from "react-router-dom"

import Amount from '../NumberInput/index';
import Upload from '../Upload/index';
import { app } from "../../services/firebase";

import './style.css';

const AddProduct = (props) => {
  const product_data = props.location.state;

  const [product, setproduct] = useState(product_data.product);
  const [price, setprice] = useState(product_data.price);
  const [quantity, setquantity] = useState(product_data.quantity);
  const [url, setUrl] = useState(product_data.url_img);
  const [name_img, setName_img] = useState(product_data.name_img);

  async function handleEditProduct(e) {
    e.preventDefault();

    if(name_img === product_data.name_img) {  
      return;
    } else {

      await app.firestore().collection('products').doc(product_data.id).update({
       product,
       price,
       quantity,
       img: {
        name_img,
        url
       }
      
      }).then(() => {

      }).catch(err => {
        console.log(err)
      })
  
      setproduct('');
      setprice(0);
      setquantity(0);
      setUrl(null)
      setName_img('');
    }
  }

  return (

      <div className="page-content">
        <div className="form-content">
          <div className="form-left">
            <h2>Atividade 01 Mobile</h2>
            
            <p className="text-1"> Implementar uma SPA (Single Page Application)
              em ReactJS que realize as operações de inserção, edição,
              listagem e remoção de documentos com o Firebase.
            </p>

            <p className="text-2"><span>Disciplina:</span> Programação para Dispositivos Móveis</p>
            <div className="form-left-last">
              <Link id="linkList" to="/">
                <input type="submit" name="account" className="account" value="Inicio" />
              </Link>
            </div>
          </div>

          <form className="form-detail" id="myform" onSubmit={handleEditProduct} >
            <h2>Editar product</h2>
            <div className="form-group">
              <div className="form-row form-row-1">
                <label className="label-text" htmlFor="product-name">Nome do produto</label>
                <input 
                  autoComplete = {0}
                  name="product-name" 
                  id="product-name" 
                  className="input-text"
                  value={product}
                  onChange={e => setproduct(e.target.value)}
                />
              </div>
              <div className="form-row form-row-1">
                <label className="label-text" htmlFor="price">Preço</label>
                <input
                  type="number"
                  name="price" 
                  id="price" 
                  className="input-text"
                  autoComplete = {0}
                  value={price}
                  onChange={e => setprice(e.target.value)}
                />
              </div>
            </div>
      
            <div className="form-row form-row-1">
              <label className="label-text" htmlFor="your_email">Quantidade</label>
              <Amount
                id="amount"
                passChildData={setquantity}
                c_value={quantity}
                max='30'
                value={quantity}
                onChange={e => setquantity(e.target.value)}
              />
            </div>

            <div className="form-row form-row-1">
              <label className="label-text" htmlFor="your_email">Imagem do produto</label>
              <Upload
                passUploadUrl={setUrl}
                passUploadImg={setName_img}
                value={url}
                name_img={name_img}
                onChange={e => setUrl(e.target.value)}
              />
            </div>

            <div className="form-row-last">
              <input 
                type="submit"
                href="/"
                name="add" 
                className="add" 
                value="Salvar alteração"   
              />
            </div>     
          </form>
        </div>
      </div>
  );
};

export default AddProduct;