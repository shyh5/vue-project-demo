<template>
  <div id="home">
    <p>home page 页面</p>
    <button @click="pushFind('/find')">点击跳转发现页</button>
    <br>
    <button @click="pushFind('/mine')">点击跳转我的页面</button>
    <br>
    <button @click="pushFind('/merc')">点击跳转项目</button>
  </div>
</template>

<script>
  export default {
    name: "home",
    methods:{
      pushFind:function (value) {
        this.$router.push(value);
      }
    }
  }
</script>

<!--scoped 表示这个样式表只对当前样式有效-->
<style scoped>
#home {
  background-color: yellowgreen;
}
</style>
