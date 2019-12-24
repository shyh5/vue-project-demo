<template>
<div>
  <h1>vue 基础精讲</h1>
  <div>{{fullName}}</div>
</div>
</template>

<script>
    export default {
      name: "vueBase",
      data() {
        return {
          firstName: "Kobe",
          lastName:'Bryant',

        }
      },
      // /*也可以使用watch*/
      // watch:{
      //   firstName:function () {
      //     console.log("计算了一次");
      //     this.fullName = this.firstName + " " + this.lastName
      //   },
      //
      //   lastName: function () {
      //     console.log("计算一次");
      //     this.fullName = this.firstName + " " + this.lastName
      //   }
      // }

      ///计算属性，会有缓存
      computed:{
        fullName:function () {
          return this.firstName + " " + this.lastName
        }
      }

    }
</script>

<style scoped>

</style>
