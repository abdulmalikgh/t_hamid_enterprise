import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'popper.js';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import '../src/assets/js/sb-admin-2.min.js'
import '../src/assets/css/fontawesome-free/css/all.min.css';
import '../src/assets/css/sb-admin-2.min.css';
// import '../src/assets/js/jquery-easing/jquery.easing.min.js'

Vue.prototype.$http = axios
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
