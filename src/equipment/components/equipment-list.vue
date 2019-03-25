<template>
      <el-row class="tac">
        <el-col :span="16">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <span>设备管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(item,index) in items" :class="[commonClass,item.active?activeClass:'']" v-on:click="navClickEvent(items,index)">
                  <span>{{item.text}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span>设备类型管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(equipmentModelMenu,index) in equipmentModelMenus" :class="[commonClass,equipmentModelMenu.active?activeClass:'']" v-on:click="navClickEvent(equipmentModelMenus,index)">
                  <span>{{equipmentModelMenu.text}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

      </el-menu>
      </el-col>
      </el-row>
</template>

<script>
    export default {
        name: "equipment-list",
      data:function () {
          return {

          }
      },
      methods: {
      }
    }
</script>

<style scoped>
  .equipment-list-ul{
    list-style-type: none;
  }
  .equipment-list-li{
    padding: 30px auto;
    height: 60px;
  }
  .active{
    color: #a1dcdd;
  }
  .el-menu-vertical-demo{
    height:700px;
  }
</style>
