<template>
  <div id="header">
    <div class="header-left">返回</div>
    <div class="header-middle">搜索城市/酒店/车票</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped>
  #header {
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
    background: #00bcd4;
    /*width: 100%;*/
    line-height: 2.2rem;
    color: white;
  }

  .header-left {
    float: left;
    background: #00bcd4;
    width: 2.2rem;
  }

  .header-middle {
    flex: 1;
    background: white;
    color: #666666;
    margin: 0.25rem;
    border-radius: 0.3rem;
    text-align: left;
    padding-left: 0.3rem;
  }

  .header-right {
    float: right;
    width: 4rem;
    background: #00bcd4;
    text-align: center;
  }
</style>
