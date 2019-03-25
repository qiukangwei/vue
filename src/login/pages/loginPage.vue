<template>
  <div id="loginPage">
    <userlogin></userlogin>
  </div>
</template>

<script>
  import userlogin from '@/login/components/login'
    export default {
        name: "loginPage",
      components:{
          'userlogin':userlogin
      }
    }
</script>

<style scoped>
  #loginPage{
    text-align: center;
  }
</style>
