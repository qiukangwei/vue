<template>
  <el-row type="flex" justify="center" >
    <el-form :model="user" status-icon ref="user" label-width="100px">
      <el-form-item><h1>删除用户信息</h1></el-form-item>
      <el-form-item label="登录账号" prop="userAccout">
        <el-input type="text" v-model="user.userAccout" :disabled="true"/>
      </el-form-item>
      <el-form-item label="用户名:" prop="userName">
        <el-input type="text" v-model="user.userName" :disabled="true"/>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="user.password" :disabled="true"/>
      </el-form-item>
      <el-form-item label="确认密码:" prop="password2">
        <el-input type="password" v-model="user.password2" :disabled="true"/>
      </el-form-item>
      <el-form-item label="性别:" prop="userSex">
        <el-radio v-model="user.userSex" label="男" :disabled="true">男</el-radio>
        <el-radio v-model="user.userSex" label="女" :disabled="true">女</el-radio>
      </el-form-item>
      <el-form-item label="电话号码:" prop="userTel">
        <el-input type="text" v-model="user.userTel" :disabled="true"/>
      </el-form-item>
      <el-form-item label="邮箱地址:" prop="userEmail">
        <el-input type="text" v-model="user.userEmail" :disabled="true"/>
      </el-form-item>
      <el-form-item label="家庭住址:" prop="userAddress">
        <el-input type="textarea" v-model="user.userAddress" :disabled="true"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('equipment')">提交</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
    export default {
        name: "deleteUser",
      data: function () {
        return {
          user: {
            userId:'',
            userAccout:'',
            userName:'',
            password:'',
            password2:'',
            userSex:'男',
            userTel:'',
            userEmail:'',
            userAddress:'',
            userRegisteredTime:'',
            lastIp:''
          }
        }
      },
      methods:{
        submitForm(equipment)
        {
          this.$axios
            .post('/deleteUser',{
              userId:this.user.userId
            })
            .then(successResponse => {
              this.responseResult = JSON.stringify(successResponse.data)
              if (successResponse.data.code === 200) {
                this.$router.replace({path:'/'})
              }
            })
            .catch(failResponse => {})
        }
      }
    }
</script>

<style scoped>

</style>
