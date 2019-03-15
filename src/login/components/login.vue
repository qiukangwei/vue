<template>
    <div>
      <p>用户名:<input type="text" v-model="logininfo.username" placeholder="请输入用户名"></p>
      <p>密码: <input type="password" v-model="logininfo.password" placeholder="请输入密码"></p>
      <p><button v-on:click="login">登录</button></p>
      <p>登录验证情况:<textarea cols="30" rows="10" v-model="responseResult"></textarea> </p>
    </div>
</template>

<script>
    export default {
        name: "loginPage",
      props:{

      }
    }
</script>

<style scoped>

</style>
