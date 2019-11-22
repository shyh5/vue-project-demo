<template>
  <div>
    <div v-for="item in typeList" :key="item.kind">
      <van-button
        :type="item.kind"
        @click="showWanning(item.path)"
      >{{item.msg}}</van-button>
    </div>
    <br>
    <br>
    <div class="to-do">
      <p>TO DO list</p>
      <van-field v-model="inputN" placeholder="请输入用户名" />
      <van-button plain type="info" @click="submitMsg">提交</van-button>
      <ol>
        <li v-for="item of liList" :key="item">{{item}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Button ,Toast,Field } from 'vant';
  Vue.use(Toast);
  Vue.use(Button);
  Vue.use(Field);

  export default {
    name: "home",
    data() {
      return {
        typeList: [
          {
            kind: 'default',
            msg: '默认-首页',
            path:'/'
          },
          {
            kind: 'primary',
            msg: '主要-我的页面',
            path:'/mine'
          },
          {
            kind: 'info',
            msg: '信息按钮',
            path:'/'
          },
          {
            kind: 'warning',
            msg: '警告按钮',
            path:'/'
          },
          {
            kind: 'danger',
            msg: '危险按钮',
            path:'/'
          }],

        inputN:'',

        liList:[],
        inputN:''
      }
    },
    methods: {
      showWanning:function (value) {
        this.$router.push(value);
      },

      submitMsg() {
        this.liList.push(this.inputN);
        this.inputN = '';
      }

    }
  }
</script>

<style  scoped>
  .to-do {
    background-color: grey;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }


</style>
