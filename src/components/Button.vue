<template>
  <button id="btn" class="btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot><!--重点在这里-->
    <span>{{msg}}</span>
  </button>
</template>

<script>
    export default {
      name:'btn',
      props:{
        msg:{
          default:'下载'
        }
      },
      methods:{         //绑定事件的关键代码
        btnClickEvent: function(){
          alert('先弹出默认的文案');
          this.$emit('btnClickEvent'); //关键代码父组件触发自定义事件
        }
      }
    }
</script>

<style scoped>
</style>
