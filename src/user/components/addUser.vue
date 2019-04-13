<template>
  <el-container>
    <el-main style="height: 550px">
      <el-row type="flex" justify="center">
      <el-form :model="user" :rules="rules" status-icon ref="user" label-width="100px" size="mini">
        <el-form-item><span>新增用户信息</span></el-form-item>
        <el-form-item label="登录账号" prop="userAccount">
          <el-input type="text" v-model="user.userAccount" clearable/>
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
          <el-input type="text" v-model.number="user.userTel" clearable/>
        </el-form-item>
        <el-form-item label="邮箱地址:" prop="userEmail">
          <el-input type="text" v-model="user.userEmail" clearable/>
        </el-form-item>
        <el-form-item label="家庭住址:" prop="userAddress">
          <el-input type="textarea" v-model="user.userAddress" clearable/>
        </el-form-item>
      </el-form>
      </el-row>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :offset="20" :span="4">
          <el-button type="primary" @click="submitForm('user')">提交</el-button>
          <el-button @click="resetForm('user')">重置</el-button>
        </el-col>
        </el-row>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "addUser",
      data: function () {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.user.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        var checkTel = (rule, value, callback) => {
          if (value.toString().length!=11){
            callback(new Error('手机号码必须为11位数字!'));
          }else{
            callback();
          }
        }
        return {
          user: {
            userAccount:'',
            userName:'',
            password:'',
            password2:'',
            userSex:'男',
            userTel:null,
            userEmail:'',
            userAddress:'',
            userRegisteredTime:'',
            lastIp:''
          },rules: {
            userAccout: [
              {required: true, message: '请输入账号', trigger: 'blur'},
              {min:6,max:20,message:'账号长度为6-20个字符',trigger:'blur'}
            ],
            userName:[
              {required: true,message:'请输入用户名',trigger:'blur'},
              {min:4,         message:'用户名必须大于4位字符',trigger:'blur'},
              {max:20,        message:'用户名不能大于20位字符',trigger:'blur'}
            ],
            password:[
              {required: true,message:'请输入密码',trigger:'blur'},
              {min:6,         message:'密码不能少于6位字符',trigger:'blur'}
            ],
            password2:[
              {required: true,message:'请再次输入密码',trigger:'blur'},
              {min:6,         message:'密码不能少于6位字符',trigger:'blur'},
              { validator:validatePass,trigger:'blur'}
            ],
            userTel:[
              {required: true,message:'请输入手机号码',trigger:'blur'},
              {type:'number',message:'手机号码必须为数字',trigger:'blur'},
              { validator:checkTel,trigger:'blur'}
            ],
            userEmail:[
              {required: true,message:'请输入邮箱地址',trigger:'blur'},
              {type:'email',message:'请输入合法的邮箱地址',trigger:'blur'}
            ]
          }
        };
      },
      methods:{
        submitForm(formName)
        {
          this.$refs[formName].validate((valid)=>{
          if(valid){
            this.$axios
              .post('/register',{
                userAccount:this.user.userAccount,
                userName:this.user.userAddress,
                password:this.user.password,
                userSex:this.user.userSex,
                userTel:this.user.userTel,
                userEmail:this.user.userEmail,
                userAddress:this.user.userAddress,
                userRegisteredTime:'',
                lastIp:localStorage.getItem('Ip')
              })
              .then(successResponse => {
                this.responseResult = JSON.stringify(successResponse.data)
                if (successResponse.data.code === 200) {
                  this.$router.replace({path:'/'})
                }
              })
              .catch(failResponse => {
                this.$alert(failResponse.data.message, '错误!', {
                  confirmButtonText: '确定'
                })
              })
          }else{
            return false;
          }
        })
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
  span{
    font-size: 20px;
  }
</style>
