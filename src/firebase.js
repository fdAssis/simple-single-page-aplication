import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyA6FAH7hgV3-QGz53zlejtneom5-X3579M",
  authDomain: "exemplo01-d4b40.firebaseapp.com",
  databaseURL: "https://exemplo01-d4b40.firebaseio.com",
  projectId: "exemplo01-d4b40",
  storageBucket: "exemplo01-d4b40.appspot.com",
  messagingSenderId: "506099309742",
  appId: "1:506099309742:web:c7baa5e6c03e9ddc5b613f",
  measurementId: "G-JN75R5W9GK"
  };
let app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
