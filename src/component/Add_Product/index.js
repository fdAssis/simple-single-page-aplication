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

  async function handleAddProduct(e) {
    e.preventDefault();

    const product = {
      produto,
      preco,
      quantidade,
      url,
    }

    await app.firestore().collection('products').add(product).then(() => {
      console.log("Dados Salvos")
    });

    setProduto('');
    setPreco(0);
    setQuantidade(0);
    setUrl(null)
  }

  return (
    <>
      <div id="container">
        <div id="content">
          <form onSubmit={handleAddProduct}>
            <h2>Adicionar Produto</h2>

            <div id="inputs">
              <label>Nome do produto</label>
              <input
                autoComplete={0}
                value={produto}
                onChange={e => setProduto(e.target.value)}
              />
              <label>Preço R$</label>
              <input
                value={preco}
                onChange={e => setPreco(e.target.value)}
              />
            </div>

            <label htmlFor="">Quantidade</label>
            <Amount
              id="amount"
              passChildData={setQuantidade}
              max='30'
              value={quantidade}
              onChange={e => setQuantidade(e.target.value)}
            />

            <button type="submit" id="buttonSub">Adicionar</button>
          </form>

          <Upload
            passUploadData={setUrl}
            value={url}
            onChange={e => setUrl(e.target.value)}
          />

          <Link id="linkList" to="/listProd">
            Listar Produtos
            <FiList />
          </Link>

        </div>

      </div>
    </>
  );
};

export default AddProduct;