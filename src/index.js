import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQotXM9U2go2HF3HPxUBAiDh3BUmIvEUM",
  authDomain: "controlaltsuprimirinformatica.firebaseapp.com",
  projectId: "controlaltsuprimirinformatica",
  storageBucket: "controlaltsuprimirinformatica.appspot.com",
  messagingSenderId: "1088917732970",
  appId: "1:1088917732970:web:a69b92343a70d5e02c5413"
};

// Initialize Firebase
const ppp = initializeApp(firebaseConfig);
export const db = getFirestore(ppp)
initializeApp(firebaseConfig)



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
