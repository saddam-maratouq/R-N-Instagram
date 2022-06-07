
// import  initializeApp  from "firebase/app"; //old way 
// import firebase from 'firebase' // new way 
 
import firebase from 'firebase';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjYpKXnuBdNHJO0ASJDkSud311UXMI31Q",
  authDomain: "rn-instgram-9fab4.firebaseapp.com",
  projectId: "rn-instgram-9fab4",
  storageBucket: "rn-instgram-9fab4.appspot.com",
  messagingSenderId: "541074316117",
  appId: "1:541074316117:web:d350d95fe602289868eddc"
};


// Initialize Firebase
!firebase.apps.length ? 
firebase.initializeApp(firebaseConfig) : firebase.app(); 

// const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = firebase.firestore(); 

export  {firebase,db}  



// const app = initializeApp(firebaseConfig); 