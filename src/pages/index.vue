<template>
  <el-container style="border:1px solid #eee">
    <el-header height="100px"><h1 class="page-title"><a class="logo" href="#/">设备借用系统</a></h1></el-header>
      <el-container>
        <el-aside style="border:1px solid #eee">
          <Menupage/>
        </el-aside>
        <el-main style="width: 1440px;height: 750px;">
          <router-view></router-view>
        </el-main>
      </el-container>
    <el-footer style="border:1px solid #eee;height: 40px">
      <el-row type="flex" justify="center">
        <span >© 2019-现在 邱康玮 版权所有</span>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
    import Menupage from "../index/pages/menuPage";
    export default {
        name: "index",
      props:{
      },
      components: { Menupage},
      methods:{

      }
    }
</script>

<style scoped>
  .page-title{
    margin: 0px;
    font-size: 30px;
  }
  .logo{
    text-decoration: none;
    color:#000;
  }
  span{
    font-size: 12px;
    color:#909399;
  }
  a{
    text-decoration: none;
    color:#909399;
  }
</style>
