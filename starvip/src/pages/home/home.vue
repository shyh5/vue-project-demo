<template>
  <div id="home">
    <p>home page 页面</p>
    <div v-for="item in btnList" :key="item.title">
      <van-button type="primary" :to="item.path">{{item.title}}</van-button>
      <br>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue';
  import { Button } from 'vant';
  Vue.use(Button);

  export default {
    name: "home",
    data() {
      return {
        btnList: [{
          path:'/find',
          title:'发现'
        },{
          path:'/mine',
          title:'我的'
        },{
          path:'/merc',
          title:'项目'
        }]
      }
    },

  }
</script>

<!--scoped 表示这个样式表只对当前样式有效-->
<style scoped>
  #home {
    background-color: yellowgreen;
  }

  .btn {
    font-size: 1rem;
    border-width: .05rem;
    border-color: rebeccapurple;
    margin-top: .5rem;
  }

</style>
