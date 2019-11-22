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
      component: home,
      meta:{
        title: '首页',
        isLogin: true,
        keepAlive: true //true显示头部
      }
    },
    {
      path: '/find',
      name: 'Find',
      component: Find,
      meta:{
        title: '发现',
        isLogin: true,
        keepAlive: true //true显示头部
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta:{
        title: '我的',
        isLogin: true,
        keepAlive: true //true显示头部
      }
    },
    {
      path: '/merc',
      name: 'merc',
      component: merc,
      meta:{
        title: '商户',
        isLogin: true,
        keepAlive: true //true显示头部
      }
    },



  ]
})
