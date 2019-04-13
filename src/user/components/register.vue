<template>
  <el-container>
    <el-header height="100px">
      <el-row type="flex" justify="start">
        <h1 class="page-title"><a href="#/">设备借用系统</a></h1>
      </el-row>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center" >
        <el-form :model="user" :rules="rules" status-icon ref="user" label-width="100px">
          <el-form-item><h1>注册</h1></el-form-item>
          <el-form-item label="登录账号" prop="userAccount">
            <el-input type="text" v-model="user.userAccount" clearable/>
          </el-form-item>
          <el-form-item label="用户名:" prop="userName">
            <el-input type="text" v-model="user.userName" clearable/>
          </el-form-item>
          <el-form-item label="真实姓名:" prop="userRealName">
            <el-input type="text" v-model="user.userRealName" clearable/>
          </el-form-item>
          <el-form-item label="生日:" prop="userBirthday">
            <el-date-picker
              v-model="user.userBirthday"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd">
            </el-date-picker>
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
          <el-form-item>
            <el-button type="primary" @click="submitForm('equipment')">提交</el-button>
            <el-button @click="resetForm('equipment')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "register",
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
        };
        return {
          pickerOptions1: {
            disabledDate(time) {
              return time.getTime() > Date.now();
            },
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          user: {
            userAccount:'',
            userName:'',
            userRealName:'',
            userBirthday:'',
            password:'',
            password2:'',
            userSex:'男',
            userTel:'',
            userEmail:'',
            userAddress:'',
            userRegisteredTime:'',
            lastIp:''
          },rules: {
            userBirthday:[
              {required: true, message: '请输入您的出生日期', trigger: 'blur'},
            ],
            userRealName:[
              {required: true, message: '请输入真实姓名', trigger: 'blur'},
            ],
            userAccount: [
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
        submitForm(equipment)
        {
          this.$axios
            .post('/register',{
              userAccount:this.user.userAccount,
              userName:this.user.userName,
              userRealName:this.user.userRealName,
              userBirthday:this.user.userBirthday,
              password:this.user.password,
              userSex:this.user.userSex,
              userTel:this.user.userTel,
              userEmail:this.user.userEmail,
              userAddress:this.user.userAddress,
              userRegisteredTime:'',
              lastIp:localStorage.getItem('Ip'),
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
  .page-title{
    margin: 0px;
    font-size: 30px;
  }
  a{
    text-decoration: none;
    color:#000;
  }
</style>
