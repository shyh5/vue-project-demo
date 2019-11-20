<template>
  <div class="wapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in sectionList" :key="item.id">
        <img class="swiper-img" :src="item.url">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--左右箭头，底部条-->
      <!--    <div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--    <div class="swiper-button-next" slot="button-next"></div>-->
      <!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          paginationHide :false,
          loop : true,
          autoplay:{
            delay:2500,
            disableOnInteraction: false
          }
        },
        sectionList: [{
          id:'0001',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/a9d92364b982c64fa78d3487647c49d1.png_890x330_079b0d42.png'
        },{
          id:'0002',
          url:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/e0d6a9ada58dcdad5fa8ab7f66365c36.jpg_890x330_61f4f33a.jpg'
        }]
      }
    }
  }
</script>

<style scoped>
  .wapper >>> .swiper-pagination-bullets {
    background-color: transparent;
  }

  .wapper >>> .swiper-pagination-bullet-active {
    background-color: white;
  }

  .swiper-img {
    width:100%;

  }
</style>
