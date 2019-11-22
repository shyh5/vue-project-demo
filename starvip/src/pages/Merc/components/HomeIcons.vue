<template>
<div class="icons">
  <div class="icon" @click="btnClick">
    <img class="icon-img">
    <p class="van-ellipsis">美食</p>
  </div>
  <div class="icon" @click="btnClick">
    <img class="icon-img">
    <p class="van-ellipsis">美食</p>
  </div>
  <div class="icon" @click="btnClick">
    <img class="icon-img">
    <p class="van-ellipsis">美食</p>
  </div>
  <div class="icon" @click="btnClick">
    <img class="icon-img">
    <p class="van-ellipsis">美食</p>
  </div>
  <div class="icon">
    <img class="icon-img">
    <p class="van-ellipsis">美食</p>
  </div>
  <div class="icon">
    <img class="icon-img">
    <p class="van-ellipsis">美食</p>
  </div>
  <div class="icon">
    <img class="icon-img">
    <p class="van-ellipsis">美食</p>
  </div>
  <div class="icon">
    <img class="icon-img">
    <p class="van-ellipsis">美食</p>
  </div>

</div>
</template>

<script>
  export default {
    name: "HomeIcons",
    methods: {
      btnClick() {
        alert("click")
      }
    }
  }
</script>

<style scoped>
  .icons {
    background-color: #00bcd4;
    width: 100%;
    height: 50vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    /*height: 0;*/
    /*padding-bottom: 50%;*/
    /*!*这个属性很常用*!*/
    /*overflow: hidden;*/
  }

  .icon {
    background-color: transparent;
    width: 25%;
    height: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon-img {
    background-color:blue;
    width: 2rem;
    height: 2rem;

  }

  >>> .van-ellipsis {
    font-size: 0.5rem;
    position: relative;
    top: 0.5rem;
    /*color: white;*/
  }
</style>
