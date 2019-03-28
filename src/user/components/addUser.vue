<template>
  <el-row type="flex" justify="center" >
    <el-form :model="user" status-icon ref="user" label-width="100px">
      <el-form-item><h1>新增用户信息</h1></el-form-item>
      <el-form-item label="登录账号" prop="userAccout">
        <el-input type="text" v-model="user.userAccout" clearable/>
      </el-form-item>
      <el-form-item label="用户名:" prop="userName">
        <el-input type="text" v-model="user.userName" clearable/>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="user.password" show-password/>
      </el-form-item>
      <el-form-item label="确认密码:" prop="password2">
        <el-input type="password" v-model="user.password2" show-password/>
      </el-form-item>
      <el-form-item label="性别:" prop="userSex">
        <el-radio v-model="user.userSex" label="男">男</el-radio>
        <el-radio v-model="user.userSex" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="电话号码:" prop="userTel">
        <el-input type="text" v-model="user.userTel" clearable/>
      </el-form-item>
      <el-form-item label="邮箱地址:" prop="userEmail">
        <el-input type="text" v-model="user.userEmail" clearable/>
      </el-form-item>
      <el-form-item label="家庭住址:" prop="userAddress">
        <el-input type="textarea" v-model="user.userAddress" clearable/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('equipment')">提交</el-button>
        <el-button @click="resetForm('equipment')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
    export default {
        name: "addUser",
      data: function () {
        return {
          user: {
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
            .post('/register',{
            })
            .then(successResponse => {
              this.responseResult = JSON.stringify(successResponse.data)
              if (successResponse.data.code === 200) {
                this.$router.replace({path:'/'})
              }
            })
            .catch(failResponse => {})
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
