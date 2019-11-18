
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'

import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
