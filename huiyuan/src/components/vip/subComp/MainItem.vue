<template>
  <div id="center">
    <!--    <img  class="head">-->
    <!--    <div class="msg">-->
    <!--      <div style="font-size: 0.36rem;color: black;text-align: left">-->
    <!--        支付即会员-->
    <!--      </div>-->
    <!--      <div style="font-size: 0.28rem;color: #8E8D89;text-align: left;margin-top: 0.03rem">-->
    <!--        高效沉淀用户，迅速聚集人气。-->
    <!--      </div>-->
    <!--    </div>-->

<!--    -->
    <img :src="model.urlS" class="head">
    <div class="msg">
      <div style="font-size: 0.36rem;color: black;text-align: left">{{model.title}}</div>
      <div style="font-size: 0.28rem;color: #8E8D89;text-align: left;margin-top: 0.03rem">{{model.msg}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      model: {
        type: Object
      }
    },
    data() {
      return{
        imgpath: require('../../../assets/img/main/yingxiao.png')
      }
    },
    name: "MainItem"
  }
</script>

<style scoped>
  #center {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /*background: chocolate;*/

  }

  .head {
    /*position: relative;*/
    /*left: 0.94rem;*/
    height: 100%;
    width: 0.82rem;
    /*background: cadetblue;*/
    margin-left: 0.94rem;
  }

  .msg {
    position: relative;
    left: 0.2rem;
    right: 0rem;
    height: 100%;
    /*background: yellowgreen;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
