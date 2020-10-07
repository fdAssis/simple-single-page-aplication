import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiList} from 'react-icons/fi'


import Amount from '../Amount/index'
import Api from '../../services/firebase';

import './style.css';

const AddProduct = () => {

  const [produto, setProduto] = useState('');
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState();

  async function handleAddProduct(e) {
    e.preventDefault();

    const product = {
      produto,
      preco,
      quantidade,
    }

    await Api.saveProduct(product);
    setProduto('');
    setPreco(0);
    setQuantidade(0);
  }

  return (
    <>
      <div id="container">
        <div id="content">
          <form onSubmit={handleAddProduct}>
            <h2>Adicionar Produto</h2>
            <input
              className="inputs"
              placeholder="Produto"
              value={produto}
              onChange={e => setProduto(e.target.value)}
            />
            <input
              className="inputs"
              placeholder="Preco"
              value={preco}
              onChange={e => setPreco(e.target.value)}
            />
            <Amount
              id="amount"
              passChildData={setQuantidade}
              max='30'
              value={quantidade}
              onChange={e => setQuantidade(e.target.value)}
            />
            <button
              type="submit"
              id="buttonSub"
            >Adicionar
            </button>
          </form>

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