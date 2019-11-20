<template>
  <div id="container">
    <h1>组件参数校验与非 props 特性</h1>
    <child content="hello world"></child>
    <br>
    <br>
    <br>
    <h2>给组件绑定原生事件</h2>
    <p>很麻烦的处理</p>
    <child content="click1" @click="childClick"></child>
    <p>利用native关键字处理</p>
    <child content="click2" @click.native="childClick"></child>
    <br>
    <br>
    <p>在Vue中使用插槽</p>
    <child1>
      <p style="background-color: rebeccapurple;color: white;" slot="header">这是一个插槽头代码</p>
      <p style="background-color: rebeccapurple;color: white;" slot="footer">这是一个插槽底部代码</p>
    </child1>
    <br>
    <br>
    <h3>vue 中的作用域插槽</h3>
    <child2>
      <slot slot-scope="prop">
        <li>{{prop.item}} - hello world</li>
      </slot>
    </child2>
    <br>
    <br>
    <br>
    <h3>动态组件和v-once 指令</h3>
    <p>点击下面的按钮，实现两个组件的切换</p>
    <p>第一种：实现方法</p>
    <dynamicOne v-if="type === 'dynamicOne'"></dynamicOne>
    <dynamicTwo v-if="type === 'dynamicTwo'"></dynamicTwo>
    <button @click="change" style="background-color: aqua;color: white;">点击切换</button>
    <br>
    <br>
    <p>第二种：实现方法 使用component</p>
    <component :is="type"></component>
    <button @click="change" style="background-color: aqua;color: white;">点击切换</button>
    <p>注：上面的方法切换的时候，其实是销毁上一个，然后重新创建新的，会有性能的消耗，考虑到这里可以在子组件上加上v-once 实现控件在内存中存储，每次不用重新创建，提高性能</p>
  </div>

</template>

<script>
  import Vue from 'vue';
  Vue.component('child',{
    //一种形式 props:['content'],，还可以已使用{}对传入参数进行约束
    props:{
      content:{
        type:String,
        default:'default value',
        validate(value) {
          return (value.length > 5);
        }
      }

    },
    template:'<div @click="childHandleClick">{{content}}</div>',
    methods:{
      childHandleClick:function () {
        alert('click click');
        this.$emit('click');
      }
    }
  });

  Vue.component('child1',{
    template:
      `<div>
         <slot name="header"></slot>
         <p>james</p>
         <p>插槽</p>
         <slot name="footer"></slot>
       </div>`
  });

  //作用域插槽
  Vue.component('child2',{
    data() {
      return {
        list:[1,2,3,4,5]
      }
    },

    template:
      `
            <div>
               <ul>
                 <slot
                 v-for="item in list"
                 :item = item
                 ></slot>
               </ul>
             </div>
    `
  });

  Vue.component('dynamicOne',{
    template:'<div>dynamicOne</div>'
  });

  Vue.component('dynamicTwo',{
    template:'<div>dynamicTwo</div>'
  });



  export default {
    name: "mine",
    data(){
      return{
        type:'dynamicOne'
      }
    },
    methods:{
      childClick:function () {
        alert('chick');
      },

      change:function () {
        this.type = (this.type === "dynamicOne" ? 'dynamicTwo' : "dynamicOne")
      },
    }
  }
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
</style>
