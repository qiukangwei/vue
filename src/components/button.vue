<template>
  <button class="btn" v-on:click="btnClick">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
    export default {
        name: "button",
      props:{
          msg:{
            default:'按钮'
          }
      },
      methods:{
          btnClick:function(){
            this.$emit('btnClick')
          }
      }
    }
</script>

<style scoped>

</style>
