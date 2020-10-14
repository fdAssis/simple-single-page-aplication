import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore'

import './style.css'

import Card from '../Card';

import { app } from "../../services/firebase";

function ListProduct() {

  const [produtos, loading, error] = useCollection(
    app.firestore().collection('products'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='row'>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {produtos && produtos.docs.map(doc => (
          <div key={doc.id} className='col-md-4-auto'>
            <Card 
              imgsrc={doc.data().img.url} 
              title={doc.data().produto} 
              price={doc.data().preco}
              quant={doc.data().quantidade}
              id={doc.id}
              imgName={doc.data().img.name_img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;