
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
// import './assets/style/remSet'

/*轮播图组件*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Mint from 'mint-ui';


import Vant, {NavBar} from 'vant';
import 'vant/lib/index.css';

Vue.use(Mint);
Vue.use(Vant);
Vue.use(NavBar);

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
