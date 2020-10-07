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

    <div className="social-box">
      <div className="container">
        <div className="row">
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {produtos && produtos.docs.map(doc => (
            <div className="col-lg-4 col-xs-12 text-center">
              <div className="box">
                <i aria-hidden="true"></i>
                
                <div className="box-title">
                  <h3>{doc.data().produto}</h3>
                </div>

                <div className="box-text">
                  <span>
                    Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret
                  qui ad.
                  </span>
                </div>
                
                <div className="box-btn">
                <a href="#">Learn More</a>
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