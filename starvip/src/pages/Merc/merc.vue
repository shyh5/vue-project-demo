<template>
  <div>
    <home-header @leftGoBack="goBack"></home-header>
    <home-swiper></home-swiper>
<!--    <swiper></swiper>-->
    <home-icons></home-icons>
    <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
  </div>
</template>


<script>
  import HomeHeader from './components/HomeHeader';
  import HomeSwiper from './components/HomeSwiper';
  // import Swiper from './components/Swiper';
  import HomeIcons from './components/HomeIcons';

  export default {
    name: "merc",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons
    },
    methods: {
      goBack:function () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  >>> .van-ellipsis {
    font-size: 0.8rem;
  }
</style>
