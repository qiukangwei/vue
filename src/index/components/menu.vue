<template>
  <el-row class="tac">
    <el-col offset="6" :span="18">
      <el-menu default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect" unique-opened="true" style="height:500px">
        <el-submenu index="1">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="index" v-for="(userMenu,index) in userMenus">
              <span>{{userMenu.text}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>库存管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="index" v-for="(storageMenu,index) in storageMenus">
              <span>{{storageMenu.text}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>设备管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="index" v-for="(equipmentMenu,index) in equipmentMenus">
              <router-link :to="equipmentMenu.View" class="router"><i :class="equipmentMenu.img"></i><span>{{equipmentMenu.text}}</span></router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span>设备类型管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="index" v-for="(equipmentModelMenu,index) in equipmentModelMenus">
              <span>{{equipmentModelMenu.text}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <span>设备交易管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="index" v-for="(borrowMenu,index) in borrowMenus">
              <span>{{borrowMenu.text}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  import menuUrl from "@/index/components/menuUrl";
    export default {
        name: "menu",
      data:function () {
        return{
          menus:[
            {text:'用户管理'},{text:'设备管理'},{text:'设备类型管理'}],
          equipmentMenus:[
            {text:'查询设备', View:'/queryEquipment',img:'el-icon-search'},
            {text:'新增设备', View:'/addEquipment',img:'el-icon-plus'},
            {text:'修改设备', View:'/modifyEquipment',img:'el-icon-edit'},
            {text:'删除设备', View:'/deleteEquipment',img:'el-icon-delete'}
            ],
          equipmentModelMenus:[
            {text:'查询设备类型', View:'query-equipment-model'},
            {text:'新增设备类型', View:'add-equipment-model'},
            {text:'修改设备类型', View:'modify-equipment-model'},
            {text:'删除设备类型', View:'delete-equipment-model'}
            ],
          userMenus:[
            {text:'查询用户信息', View:'query-user'},
            {text:'新增用户信息', View:'add-user'},
            {text:'修改用户信息', View:'modify-user'},
            {text:'删除用户信息', View:'delete-user'}
          ],
          storageMenus:[
            {text:'查询库存信息', View:'query-storage'},
            {text:'库存操作'  ,   View:'storage'},
          ],
          borrowMenus:[
            {text:'查询记录', View:'query-borrow'},
            {text:'借用设备', View:'add-borrow'},
            {text:'归还设备', View:'delete-borrow'},
            {text:'修改记录', View:'modify-borrow'},
          ]
        }
      },
      methods:{
        handleSelect(key, keyPath) {
              console.log(key,keyPath,this.equipmentModelMenus[key].View);
            }
      }
    }
</script>

<style scoped>
  .router{
    color: #606266;
    text-decoration: none;
  }
</style>
