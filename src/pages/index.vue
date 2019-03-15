<template>
    <div id="index">
      <p>首页</p>
      <login-page></login-page>
    </div>
</template>

<script>
    import LoginPage from "../login/pages/loginPage";
    export default {
        name: "index",
      components: {
          'login-page':LoginPage
        }
    }
</script>

<style scoped>

</style>
