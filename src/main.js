import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCunPP4q16BqPnOdhBEWRn0QatJWMVjmKs",
  authDomain: "task-list-522b3.firebaseapp.com",
  projectId: "task-list-522b3",
  storageBucket: "task-list-522b3.appspot.com",
  messagingSenderId: "332540505517",
  appId: "1:332540505517:web:c794faaffb91cf22bdc524"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')