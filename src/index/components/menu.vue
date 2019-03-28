<template>
  <el-row class="tac">
    <el-col offset="6" :span="18">
      <el-menu default-active="activeIndex" router="true" background-color="#DCDFE6"  text-color="#303133" active-text-color="#409EFF"
               @select="handleSelect" unique-opened="true" style="height:650px;text-align:center">
        <el-menu-item index="/">
            <span>首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="userMenu.View" v-for="(userMenu) in userMenus">
              <span>{{userMenu.text}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>库存管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="storageMenu.View" v-for="(storageMenu) in storageMenus">
              <span>{{storageMenu.text}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>设备管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="equipmentMenu.View" v-for="(equipmentMenu) in equipmentMenus">
              <i :class="equipmentMenu.img"></i><span>{{equipmentMenu.text}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span>设备类型管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="equipmentModelMenu.View" v-for="(equipmentModelMenu) in equipmentModelMenus">
              <i :class="equipmentModelMenu.img"></i><span>{{equipmentModelMenu.text}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <span>设备交易管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="borrowMenu.View" v-for="(borrowMenu) in borrowMenus">
              <span>{{borrowMenu.text}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <span>设备入口测试</span>
          </template>
          <el-menu-item-group>
              <el-menu-item :index="login.View" v-for="(login) in logins">
                <span>{{login.text}}</span>
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
          userMenus:[
            {text:'查询用户信息', View:'queryUser'},
            {text:'新增用户信息', View:'addUser'},
            {text:'修改用户信息', View:'modifyUser'},
            {text:'删除用户信息', View:'deleteUser'}
          ],
          storageMenus:[
            {text:'查询库存信息', View:'queryStorage'},
            {text:'库存操作'   , View:'storage'},
          ],
          equipmentMenus:[
            {text:'查询设备', View:'queryEquipment', img:'el-icon-search'},
            {text:'新增设备', View:'addEquipment',   img:'el-icon-plus'},
            {text:'修改设备', View:'modifyEquipment',img:'el-icon-edit'},
            {text:'删除设备', View:'deleteEquipment',img:'el-icon-delete'}
            ],
          equipmentModelMenus:[
            {text:'查询设备类型', View:'queryEquipmentModel', img:'el-icon-search'},
            {text:'新增设备类型', View:'addEquipmentModel',   img:'el-icon-plus'},
            {text:'修改设备类型', View:'modifyEquipmentModel',img:'el-icon-edit'},
            {text:'删除设备类型', View:'deleteEquipmentModel',img:'el-icon-delete'}
            ],
          borrowMenus:[
            {text:'查询记录', View:'queryBorrow'    ,img:'el-icon-search'},
            {text:'借用设备', View:'borrowEquipment',img:'el-icon-goods'},
            {text:'归还设备', View:'returnEquipment',img:'el-icon-sold-out'},
            {text:'修改记录', View:'modifyBorrow'   ,img:'el-icon-delete'},
          ],
          logins:[
            {text:'登录',View:'testLogin'},
            {text:'注册',View:'testRegister'}
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
</style>
