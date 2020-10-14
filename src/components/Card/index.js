import React from "react";
import "./style.css";

import {projectFirestore, projectStorage} from '../../services/firebase'
import { Link } from "react-router-dom";

 
function Card (props) {

  function handledelete() {
    const storageRef = projectStorage.ref('products');
    
    const firestoreRef = projectFirestore.collection('products');

    firestoreRef.doc(props.id).delete().then(() => {
    }).catch(err => {
      console.log(err);
    })

    storageRef.child(props.imgName).delete().then( () => {
    }).catch(err => {
      console.log(err);
    })
  }


  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src={props.imgsrc} alt='Image 1' className='card-img-top' />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>Produto: {props.title}</h4>
        <p className='card-text text-secondary'>Preço: {props.price}</p>
        <p className='card-text text-secondary'>Quantidade: {props.quant}</p>
        <Link className='btn btn-outline-success'
          to={{
            pathname: '/edit',
            state: {
              price: props.price,
              product: props.title,
              quantity: props.quant,
              id: props.id,
              url_img: props.imgsrc,
              name_img: props.imgName
            }
          }} 
        >
          Editar
        </Link>
        <button
          className='btn btn-outline-danger'
          onClick= {handledelete}
        >
          Deletar
        </button>
      </div>
    </div>
  );
}
 
export default Card;