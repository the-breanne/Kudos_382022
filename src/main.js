import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBgAo_SyQnXriyIZ_VfKcNl3ume6_2uf0Y",
  authDomain: "kudos-3332a.firebaseapp.com",
  projectId: "kudos-3332a",
  storageBucket: "kudos-3332a.appspot.com",
  messagingSenderId: "8210428645",
  appId: "1:8210428645:web:7cfa5895b24fed8f631a0c"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')