<template>
  <div id="center">
    <div class="left-view">
      <div style="font-size: 0.36rem;color: black;text-align: left">新大陆测试商户1</div>
      <div style="font-size: 0.28rem;color: #8E8D89;text-align: left;margin-top: 0.03rem">商户号：8023273137179</div>
    </div>
    <div>
      <van-checkbox v-model="checked" checked-color="#E1C56F"></van-checkbox>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Checkbox, CheckboxGroup} from 'vant';

  Vue.use(Checkbox).use(CheckboxGroup);

  export default {
    name: "MercItem",
    data() {
      return {
        checked: false
      }
    }
  }
</script>

<style scoped lang="stylus">
  #center
    background darksalmon
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    border-radius 0.08rem

    .left-view
      display flex
      width 80%
      height 100%
      flex-direction column
      justify-content center



</style>
