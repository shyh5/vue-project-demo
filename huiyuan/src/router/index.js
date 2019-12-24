import Vue from 'vue'
import Router from 'vue-router'
import vimMain from '@/components/vip/vipMain'
import vipMerc from '@/components/vip/vipMerc'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vimMain',
      component: vimMain
    },
    {
      path: '/vipMerc',
      name: 'vipMerc',
      component: vipMerc
    }
  ]
})
