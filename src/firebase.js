// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// import { getFirestore } from 'firebase/firestore/lite';


import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBquDmgpJo-Sj_rXZ21ekVat-J8-DvhV6Y",
  authDomain: "clone-864a4.firebaseapp.com",
  projectId: "clone-864a4",
  storageBucket: "clone-864a4.firebasestorage.app",
  messagingSenderId: "105507104619",
  appId: "1:105507104619:web:6d86cef445def4cf11ce2e",
  measurementId: "G-S5XEJSCDQH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 

  export {db, auth}; 
