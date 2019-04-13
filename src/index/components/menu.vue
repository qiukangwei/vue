<template>
  <el-row>
    <el-col :offset=6 :span=18>
      <el-menu default-active="activeIndex" background-color="#DCDFE6"  text-color="#303133" active-text-color="#409EFF"
               @select="handleSelect" unique-opened style="height:700px;text-align:center">
        <el-submenu index="1" v-for="(menusWeb) in menusWebs">
          <template slot="title">
            <span>{{menusWeb.mName}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="menusWeb.menusWebList.mUrl">
              <span>{{menusWeb.menusWebList.mName}}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
    export default {
        name: "menu",
      data:function () {
        return{
         menusWebs:[],
          menusWeb:{
            mName:'',
            mUrl:'',
            mImg:'',
            menusWebList:{
              mName:'',
              mUrl:'',
              mImg:''
            }
          }
        }
      },
      created(){
        this.$axios
          .post('/queryPosition',{
            userId:this.$store.state.loginUser.userId
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.menusWebs=successResponse.data.data;
            }
          })
          .catch(failResponse => {
            this.$alert(failResponse.data.message, '错误!', {
              confirmButtonText: '确定'
            });
          })
      },
      methods:{
        handleSelect(key, keyPath) {
          this.$router.push({path:"/stuff/"+key});
        }
      }
    }
</script>

<style scoped>
</style>
