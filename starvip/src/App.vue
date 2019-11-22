<template>
  <div id="app">
    <!--这个一定要写-->
    <router-view>
      <div>导航栏</div>
    </router-view>
    <base-tabbar/>
  </div>
</template>

<script>
  import BaseTabbar from './pages/public/BaseTabbar';
  export default {
    name: 'App',
    components: {
      BaseTabbar
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
