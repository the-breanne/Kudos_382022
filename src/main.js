import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'


var firebaseConfig = {
  apiKey: "AIzaSyCunPP4q16BqPnOdhBEWRn0QatJWMVjmKs",
  authDomain: "task-list-522b3.firebaseapp.com",
  projectId: "task-list-522b3",
  storageBucket: "task-list-522b3.appspot.com",
  messagingSenderId: "332540505517",
  appId: "1:332540505517:web:c794faaffb91cf22bdc524"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


