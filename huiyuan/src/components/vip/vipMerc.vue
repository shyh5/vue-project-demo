<template>
  <div>
    <van-tabs v-model="active"
              background="black"
              title-inactive-color="white"
              title-active-color="#E1C56F"
              title-style="font-size:0.28rem"
              color="#E1C56F">
      <van-tab title="未开通" background="#FFFFFF">
        <merc-item class="item"></merc-item>
        <br>

        <merc-item class="item"></merc-item>
        <br>

        <merc-item class="item"></merc-item>
        <br>

        <merc-item class="item"></merc-item>
        <br>

        <merc-item class="item"></merc-item>
        <br>

        <button class="btm-btn-one" @click="onPress">开通</button>

      </van-tab>
      <van-tab title="已开通">
        <merc-item class="item"></merc-item>
        <br>
        <merc-item class="item"></merc-item>
        <br>
        <merc-item class="item"></merc-item>
        <br>

        <merc-item class="item"></merc-item>
        <br>

        <merc-item class="item"></merc-item>
        <br>

        <merc-item class="item"></merc-item>
        <button class="btm-btn-one">确定</button>
      </van-tab>

    </van-tabs>


  </div>
</template>

<script>
  import Vue from 'vue';
  import {Tab, Tabs,Dialog} from 'vant';
  import MercItem from './subComp/MercItem'

  Vue.use(Tab).use(Tabs).use(Dialog);

  export default {
    name: "vipMerc",
    data() {
      return {
        active: 0
      }
    },
    methods: {
      onPress() {
        Dialog.alert({
          message: '会员服务开通成功'
        }).then(() => {
          // on close
          console.log("点击确定")
        })
      }
    },
    components: {
      MercItem
    }
  }
</script>

<style scoped lang="stylus">
  .item
    background greenyellow
    width 90%
    height 1.48rem
    position relative
    top 0.3rem
    left 5%
    right 5%

  .btm-btn-one
    background #E1C56F
    color white
    font-size 0.36rem
    height 0.88rem
    width 100%
    position relative
    top 1rem

</style>
