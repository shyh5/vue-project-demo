import Vue from 'vue'
import Router from 'vue-router'
import home from '@/modules/home/home'
import mine from '@/modules/mine/mine'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
