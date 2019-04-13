<template>
  <el-container>
    <el-header height="100px">
      <el-row type="flex" justify="start">
        <h1 class="page-title"><a href="#/">设备借用系统</a></h1>
      </el-row>
    </el-header>
    <el-container>
      <el-aside style="width: 1200px">
        <el-row type="flex" justify="center" style="margin-top: 20%">
          <span style="font-size: 80px">设备借用系统</span>
        </el-row>
      </el-aside>
      <el-main style="height: 650px">
      <el-row type="flex" justify="start" style="margin-top: 20%">
        <el-col :span="12">
          <el-form :model="user" status-icon ref="user" label-width="100px" size="mini">
            <el-form-item><span>登录用户信息</span></el-form-item>
            <el-form-item label="登录账号" prop="userAccount" label-width="120px">
              <el-input type="text" v-model="user.userAccount" clearable />
            </el-form-item>
            <el-form-item label="密码" prop="password" label-width="120px">
              <el-input type="password" v-model="user.password" clearable/>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
        <el-row type="flex" justify="start">
          <el-col :offset="2" :span="6">
            <el-button type="primary" style="width: 280px" @click="login()">登录</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" style="margin-top: 10px">
          <el-col :offset="5" :span="6">
            <span style="font-size: small"><a href="#/register" style="color: #909399">还没有账号?点击注册</a></span>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-footer height="100px">
      <el-button style="width: 300px" @click="stuffLogin()">员工通道</el-button>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "loginPage",
      data:function () {
        return{
          user:{
            userId:'',
            userAccount:'',
            password:'',
            userPosition:'',
            userTel:'',
            lastTime:''
          },
          responseResult:['']
        }
      },
      methods:{
          login(){
            this.$axios
              .post('/login',{
                userAccount:this.user.userAccount,
                password:this.user.password
              })
              .then(successResponse => {
                this.user = successResponse.data.data;
                this.$store.commit("setLoginUser",user);
                console.log(this.$store.state.loginUser.userId);
                if (successResponse.data.code === 200){
                  this.$message({
                    message:'欢迎您,'+this.user.userPosition+":"+this.user.userName,
                    type:'success'
                  });
                  this.$router.replace({path:'/'})
                }
              })
              .catch(failResponse => {
                this.$message({
                  message:"未知错误,请重试",
                  type:'error'
                });
              })
          },
        stuffLogin(){
            this.$router.push({path:'/stuffLogin'});
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
