import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  };
  
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

var products = [];

export default {
  saveProduct: async (product) => {
    if(!product) return null;

    return await db.collection('products').add(product).then(docRef=>{
      return product;
    }).catch(e=>null);
  },

  getProduct: async () => {
    return await db.collection('products').get().then(
      snapshot => {
        snapshot.docs.forEach(pro => {
          products.push(pro.data());
        });
        return products;
      }
    )
  },

  listPro: () => {
    return products;
  }
}