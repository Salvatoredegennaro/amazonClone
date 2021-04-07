// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHYYhzbjfdsqho1nRt57YnLZRGuMN0lis",
    authDomain: "clone-fc265.firebaseapp.com",
    projectId: "clone-fc265",
    storageBucket: "clone-fc265.appspot.com",
    messagingSenderId: "1045966372761",
    appId: "1:1045966372761:web:01360635572c99895edd08",
    measurementId: "G-Q9YDMZJLHM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };