<template>
  <el-container style="border:1px solid #eee">
    <el-header height="100px"><h1 class="page-title"><a href="#/">设备借用系统</a></h1></el-header>
      <el-container>
        <el-aside>
          <Menupage/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
    import Menupage from "../index/pages/menuPage";
    import IndexComponent from "../index/components/indexComponent";
    export default {
        name: "index",
      props:{
      },
      components: {IndexComponent, Menupage},
      methods:{

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
