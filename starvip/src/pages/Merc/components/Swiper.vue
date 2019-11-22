<template>
  <div id="container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in sectionList" :key="item.id">
        <img class="swiper-img" :src="item.url">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Swipe, SwipeItem} from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
    name: "Swiper",
    data(){
      return{
        sectionList: [{
          id:'0001',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/a9d92364b982c64fa78d3487647c49d1.png_890x330_079b0d42.png'
        },{
          id:'0002',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/e0d6a9ada58dcdad5fa8ab7f66365c36.jpg_890x330_61f4f33a.jpg'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper-img
    width 100%

</style>
