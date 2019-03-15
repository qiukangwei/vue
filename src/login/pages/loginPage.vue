<template>
  <div id="loginPage">
    <p>这是登录页面</p>
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

</style>
