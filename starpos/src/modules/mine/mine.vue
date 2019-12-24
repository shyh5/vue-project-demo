<template>
  <div class="container">
    <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
  </div>
</template>

<script>
  import 'vant/lib/index.css';
  export default {
    name: "mine"
  }
</script>

<style scoped>
  .container {
    background-color: blue;
    color: black;
    font-size: 1.5rem;
  }
</style>
