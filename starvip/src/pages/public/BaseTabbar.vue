<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index,item.name)"
    >
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    name: "BaseTabbar",
    data() {
      return {
        currIndex: 0,
        active: 0,
        tabbars: [
          {
            name: "home",
            title: "首页",
            normal: require("../../assets/icons/tabBar0.png"),
            active: require("../../assets/icons/tabBarSel0.png")
          },
          {
            name: "find",
            title: "发现",
            normal: require("../../assets/icons/tabBar1.png"),
            active: require("../../assets/icons/tabBarSel1.png")
          },
          {
            name: "merc",
            title: "商户",
            normal: require("../../assets/icons/tabBar2.png"),
            active: require("../../assets/icons/tabBarSel2.png")
          },
          {
            name: "mine",
            title: "我的",
            normal: require("../../assets/icons/tabBar3.png"),
            active: require("../../assets/icons/tabBarSel3.png")
          }
        ]
      };
    },
    methods: {
      tab(index, val) {
        this.currIndex = index;
        if (val === "home") {
          this.$router.push('/');
        } else {
          this.$router.push(val);
        }
      }
    }
  }
</script>

<style scoped>
  .active_tab img {
    width: 26px;
    height: 26px;
  }

  .van-tabbar-item--active {
    color: #25A2F2;
  }
</style>
