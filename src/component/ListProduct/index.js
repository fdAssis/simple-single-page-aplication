import React from 'react';
import {Link} from 'react-router-dom';
import { MdDelete, MdCreate } from 'react-icons/md'
import { useCollection } from 'react-firebase-hooks/firestore'

import './style.css'

import { app } from "../../services/firebase";

function ListProduct() {

  const [produtos, loading, error] = useCollection(
    app.firestore().collection('products'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (

    <div className="product-box">
      <div className="container">
        <div className="row">
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {produtos && produtos.docs.map(doc => (
            <div key={doc.id} className="col-lg-4 col-xs-12 text-center">
              <div className="box">
                <i className="fa" aria-hidden="true">
                {doc.data().produto}
                </i>

                <div className="box-img">
                  <img src={doc.data().url} alt=""/>
                </div>
              
                <div className="box-title">
                  <h3>Preço: R$ {doc.data().preco}</h3>
                </div>
                
                <div className="box-text">
                  <span>
                    Quantidade: {doc.data().quantidade}
                  </span>
                </div>

                <div className="box-btn">
                <button id="btnDelete" onClick={() => {}}>
                  <MdDelete size={34} color="#f56a79"/>
                </button>

                <Link id="link" to="/teste">
                  <MdCreate style={{ marginLeft: 30 }} size={34} color="#03c4a1"/>
                </Link>
        
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default ListProduct;