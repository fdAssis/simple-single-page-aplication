import { db } from "./firebase.js";

import Product from "./entity/Product.js"

export function saveProduct(product){

  if(!product) return null;

  return db.collection('products').add(product.attributes).then(docRef=>{
    product.id=docRef.id;
    return product;
  }).catch(e=>null);
}

export function getProduct(id){

  if(!id) return null;

  return db.doc(`/products/${id}`).get().then(doc=>{
    if(doc.exists){
      let product = new Product(doc.data());
      product.id=doc.id;
      return product;
    }else{
      return null;
    }
  }).catch(e=>null);
}

export function updateProduct(product){

  let id=product.id;
  if(!id) return null;

  delete product.id;

  return db.doc(`/products/${id}`).set(product.attributes).then(ref=>product).catch(e=>null);
}

export function listProducts(){
  return db.collection('products').get().then(res=>{
      let products=[];

      res.forEach(doc=>{
        if(doc.exists){
          let product = new Product(doc.data());
          product.id=doc.id;
          products.push(product);
        }
      });

      return products;
    }
  );
}


export function deleteProduct(id){

  if(!id) return null;

  db.doc(`/products/${id}`).delete().then(()=>true).catch(e=>false);
}
