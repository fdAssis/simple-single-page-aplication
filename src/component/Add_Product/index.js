import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiList } from 'react-icons/fi'


import Amount from '../Amount/index';
import Upload from '../Upload/index';
import { app } from "../../services/firebase";

import './style.css';

const AddProduct = () => {

  const [produto, setProduto] = useState('');
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [url, setUrl] = useState(null);
  const [name_img, setName_img] = useState('');

  async function handleAddProduct(e) {
    e.preventDefault();

    if(produto === '' || preco === 0) {
      return;
    } else {
      const product = {
        produto,
        preco,
        quantidade,
        img: {
          url,
          name_img,
        }
       
      }
  
      await app.firestore().collection('products').add(product).then(() => {
        console.log("Dados Salvos")
      });
  
      setProduto('');
      setPreco(0);
      setQuantidade(0);
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
              <Link id="linkList" to="/listProd">
                <input type="submit" name="account" className="account" value="Lista de Produtos" />
              </Link>
            </div>
          </div>

          <form className="form-detail" id="myform" onSubmit={handleAddProduct} >
            <h2>Adicionar produto</h2>
            <div className="form-group">
              <div className="form-row form-row-1">
                <label className="label-text" for="product-name">Nome do produto</label>
                <input 
                  autoComplete = {0}
                  name="product-name" 
                  id="product-name" 
                  className="input-text"
                  value={produto}
                  onChange={e => setProduto(e.target.value)}
                />
              </div>
              <div className="form-row form-row-1">
                <label className="label-text" for="price">Preço</label>
                <input
                  type="number"
                  name="price" 
                  id="price" 
                  className="input-text"
                  autoComplete = {0}
                  value={preco}
                  onChange={e => setPreco(e.target.value)}
                />
              </div>
            </div>
      
            <div className="form-row form-row-1">
              <label className="label-text" for="your_email">Quantidade</label>
              <Amount
                id="amount"
                passChildData={setQuantidade}
                max='30'
                value={quantidade}
                onChange={e => setQuantidade(e.target.value)}
              />
            </div>

            <div className="form-row form-row-1">
              <label className="label-text" for="your_email">Imagem do produto</label>
              <Upload
                passUploadUrl={setUrl}
                passUploadImg={setName_img}
                value={url}
                onChange={e => setUrl(e.target.value)}
              />
            </div>

            <div className="form-row-last">
              <input type="submit" name="add" className="add" value="Adicionar produto"/>
            </div>     
          </form>
        </div>
      </div>
  );
};

export default AddProduct;