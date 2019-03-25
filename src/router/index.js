import Vue from 'vue';
import Router from 'vue-router';    //路由组件
//引用页面模板->供路由使用
import index from '@/pages/index';
import loginPage from '@/login/pages/loginPage';
import loginsuccessPage from '@/login/pages/loginsuccessPage';
import testPage from '@/equipment/components/addEquipmentModel';
import equipmentPage from '@/equipment/pages/equipmentPage';
import addEquipment from '@/equipment/components/addEquipment';
import queryEquipment from '@/equipment/components/queryEquipment';
import modifyEquipment from '@/equipment/components/modifyEquipment';
import deleteEquipment from '@/equipment/components/deleteEquipment';

Vue.use(Router)                    //显示声明要用路由

export default new Router({        //注册路由
  routes: [
    {
      path:'/login',
      name:'loginPage',
      component:loginPage
    },
    {
      path:'/',
      component:index,
      children:[
        {path:'/test',component:testPage},
        {path:'/equipmentPage',component:equipmentPage},
        {path:'/addequipment',component:addEquipment},
        {path:'/modifyequipment',component:modifyEquipment},
        {path:'/deleteequipment',component:deleteEquipment},
        {path:'/queryequipment',component:queryEquipment}
      ]
    },
    {
      path:'/loginsuccess',
      name:'loginsuccess',
      component:loginsuccessPage
    },
    {
      path:'/manage',
      redirect:'/login'
    }
  ]
})


