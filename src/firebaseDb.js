import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCwY4qIRkW_3-8p6Q_-by5ETiYKfOTJACk",
  authDomain: "kudosproject-668dc.firebaseapp.com",
  projectId: "kudosproject-668dc",
  storageBucket: "kudosproject-668dc.appspot.com",
  messagingSenderId: "23453393552",
  appId: "1:23453393552:web:0f0624b5eafa6d4953ae15"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();