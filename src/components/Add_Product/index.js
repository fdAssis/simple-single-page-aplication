import React, { useState } from 'react';

import NumberInput from '../NumberInput/index';
import Upload from '../Upload/index';
import { app } from "../../services/firebase";

import './style.css';

const AddProduct = () => {

  const [product, setproduct] = useState('');
  const [price, setprice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [url, setUrl] = useState(null);
  const [name_img, setName_img] = useState(null);

  async function handleAddProduct(e) {
    e.preventDefault();

    if(product === '' || price === 0) {
      return;
    } else {
      const product_data = {
        product,
        price,
        quantity,
        img: {
          url,
          name_img,
        }     
      }
  
      await app.firestore().collection('products').add(product_data).then(() => {
        console.log("Dados Salvos")
      });
  
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
              <a id="linkList" href="https://github.com/fdAssis/simple-single-page-aplication" target="_blank">
                <input type="submit" name="account" className="account" value="Github" />
              </a>
            </div>
          </div>

          <form className="form-detail" id="myform" onSubmit={handleAddProduct} >
            <h2>Adicionar produto</h2>
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
              <NumberInput
                id="NumberInput"
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
                onChange={e => setUrl(e.target.value)}
              />
            </div>

            <div className="form-row-last">
              <input 
                type="submit" 
                name="add" 
                className="add" 
                value="Adicionar produto"
              />
            </div>     
          </form>
        </div>
      </div>
  );
};

export default AddProduct;