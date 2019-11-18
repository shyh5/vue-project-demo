import Vue from 'vue'
import Router from 'vue-router'

/*@表示src 文件地址*/
import home from '@/pages/home/home';
import Find from '@/pages/find/Find';
import mine from '@/pages/mine/mine';
import merc from '@/pages/Merc/merc';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/merc',
      name: 'merc',
      component: merc
    },



  ]
})
