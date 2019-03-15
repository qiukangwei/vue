<template>
    <div>
      <p>这是登录组件</p>
      <p>用户名:<input type="text" v-model="userlogin.username" placeholder="请输入用户名"></p>
      <p>密码: <input type="password" v-model="userlogin.password" placeholder="请输入密码"></p>
      <p><button v-on:click="login">登录</button></p>
      <p>登录验证情况:<textarea cols="30" rows="10" v-model="responseResult"></textarea> </p>
    </div>
</template>

<script>
    export default {
        name: "loginPage",
      data:function () {
        return{
          userlogin:{username:'',password:''},
          responseResult:['']
        }
      },
      methods:{
          login(){
            this.$axios
              .post('/userlogin',{
                username:this.userlogin.username,
                password:this.userlogin.password
              })
              .then(successResponse => {
                this.responseResult = JSON.stringify(successResponse.data)
                if (successResponse.data.code === 200){
                  this.$router.replace({path:'/loginsuccess'})
                }
              })
              .catch(failResponse => {})
          }
      }
    }
</script>

<style scoped>

</style>
