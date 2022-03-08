import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFfE7ni7riLeuf5C_SARf2HA0Eias9Vi0",
    authDomain: "task2-ce24d.firebaseapp.com",
    projectId: "task2-ce24d",
    storageBucket: "task2-ce24d.appspot.com",
    messagingSenderId: "385875807112",
    appId: "1:385875807112:web:90c596b6d10fe860c6c83d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();