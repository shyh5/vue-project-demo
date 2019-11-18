<template>
    <div id="find">
      <h1>组件的使用细节</h1>
      <table>
        <tbody>
        <tr>
          <td>第1行</td>
        </tr>
        <tr>
          <td>第2行</td>
        </tr>
        <tr>
          <td>第3行</td>
        </tr>
        <tr>
          <td>第4行</td>
        </tr>
        </tbody>
      </table>

      <br>
      <br>
      <p>使用组件的是tableview</p>
      <table>
        <tbody>
        <row></row>
        <row></row>
        <row></row>
        <row></row>
        </tbody>
      </table>

      <br>
      <br>
      <p>计数器：</p>
      <div>
        <counter ref="one" @change="changeHandle"></counter>
        <br>
        <counter ref="two" @change="changeHandle"></counter>
        <br>
        <p>总计：{{total}}</p>
      </div>

      <br>
      <br>
      <p>带初始值的计数器：</p>

    </div>
</template>

<script>
  import Vue from 'vue'
  /*三个细节： 1，is关键字 2，子组件里面的data是个func 3，ref实现父组件监听子组件的变化*/
  Vue.component('row',{
    template:'<tr><td>this is row</td></tr>',
  });

  /*计数器*/
  Vue.component('counter',{
    template:'<button @click="press">计数：{{count}}</button>',
    /*这里如果和父组件一样就会报错*/
    data(){
      return{
        count:0
      }
    },

    methods:{
      press:function () {
        this.count += 2;
        /*给父组件提供可以监听的方法*/
        this.$emit('change',2);
      }
    }
  });

  export default {
    name: "Find",
    data(){
      return{
        total:0,
      }
    },

    methods:{
      changeHandle:function (step) {
        console.log(step);
        this.total =  this.$refs.one.count + this.$refs.two.count;
      }

    }
  }
</script>

<style scoped>
#find {
  background-color: aqua;
}
</style>
