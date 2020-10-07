import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore'

import { FiChevronRight } from 'react-icons/fi'
import './style.css'

import Api from '../../services/firebase';

function ListProduct() {

  const [produtos, loading, error] = useCollection(
    Api.firestore().collection('products'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div id="list">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {produtos && produtos.docs.map(doc => (
        <a key={doc.id} href="teste">
          <div id="img">
            <h6>{doc.data().produto.substr(0,1)}</h6>
          </div>
          <div>
            <strong>{doc.data().produto}</strong>
            <p> R$: {doc.data().preco}</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      ))}
    </div>
  );
}

export default ListProduct;