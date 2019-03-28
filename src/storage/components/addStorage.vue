<template>
  <el-row type="flex" justify="center" >
    <el-form :model="user" status-icon ref="user" label-width="100px">
      <el-form-item><h1>新增库存信息</h1></el-form-item>
      <el-form-item label="登录账号" prop="userAccout">
        <el-input type="text" v-model="user.userAccout" clearable/>
      </el-form-item>
      <el-form-item label="用户名:" prop="userName">
        <el-input type="text" v-model="user.userName" clearable/>
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
        name: "addStorage",
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
