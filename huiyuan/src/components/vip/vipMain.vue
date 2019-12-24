<template>
  <div id="container">
    <img src="../../assets/img/main/introduce.png" alt="郁金香" class="headImg">
    <div v-for="model in list">
      <main-item class="main-item" :model="model"></main-item>
      <br>
      <br>
    </div>
    <button class="merc" @click="onPress">选择商户</button>
  </div>
</template>

<script>
  import MainItem from './subComp/MainItem';
  export default {
    name: "vipMain",
    methods: {
      onPress() {
        this.$router.push('/vipMerc');
      }
    },
    data() {
      return{
        list:[
          {
            title:'支付即会员',
            msg:'高效沉淀用户，迅速聚集人气。',
            urlS:require('../../assets/img/main/huiyuan.png')
          },
          {
            title:'丰富的营销工具',
            msg:'随机减、满减、券、积分、储值。',
            urlS:require('../../assets/img/main/yingxiao.png')
          },
          {
            title:'完美连接蜻蜓设备',
            msg:'完美连接蜻蜓设备',
            urlS:require('../../assets/img/main/device.png')
          }
        ]
       }
    },
    components: {
      MainItem
    }

  }
</script>

<style scoped>
  /*#container*/
  /*  background yellowgreen*/
  .headImg {
    width: 100%;
    height: 3.6rem;
    background: #25a4bb;
  }
  .main-item {
    width: 100%;
    height:0.82rem;
    position: relative;
    top: 0.5rem;
  }

  .merc {
    background: #E1C56F;
    color: white;
    width: 5.8rem;
    height: 0.88rem;
    font-size: 0.36rem;
    border-radius: 0.12rem;
    position: relative;
    top:1.2rem;

  }

</style>
