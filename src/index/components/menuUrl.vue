<template>
  <div id="menu-url">
    <button :class="btnClass" v-on:click="menuBtn">{{text}}</button>
  </div>
</template>

<script>
    export default {
        name: "menuUrl",
      props:{
        btnClass:{
          default:"menubtn"
        },
        menuBtn:{
          default:""
        },
        text:{
          default:"默认按钮"
        }
      }
    }
</script>

<style scoped>
  .menubtn{
    float: left;
    width: 250px;
    height: 300px;
    padding: 16px;
    margin: 25px;
  }
</style>
