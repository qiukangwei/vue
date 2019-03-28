import Vue from 'vue';
import Router from 'vue-router';    //路由组件
//引用页面模板->供路由使用
import index from '@/pages/index';
import loginPage from '@/login/pages/loginPage';
import loginsuccessPage from '@/login/pages/loginsuccessPage';
import equipmentPage from '@/equipment/pages/equipmentPage';
import addEquipment from '@/equipment/components/addEquipment';
import queryEquipment from '@/equipment/components/queryEquipment';
import modifyEquipment from '@/equipment/components/modifyEquipment';
import deleteEquipment from '@/equipment/components/deleteEquipment';
import addEquipmentModel from '@/equipmentModel/components/addEquipmentModel';
import queryEquipmentModel from '@/equipmentModel/components/queryEquipmentModel'
import modifyEquipmentModel from '@/equipmentModel/components/modifyEquipmentModel';
import deleteEquipmentModel from '@/equipmentModel/components/deleteEquipmentModel';
import testRegister from '@/user/components/register';
import addUser from '@/user/components/addUser';
import modifyUser from '@/user/components/modifyUser';
import deleteUser from '@/user/components/deleteUser';
import queryUser from '@/user/components/queryUser';
import borrowEquipment from '@/borrow/components/borrowEquipment';
import addBorrow from '@/borrow/components/addBorrow'
import error from '@/result/pages/404';

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
        {path:'',component:loginPage},
        {path:'equipmentPage',component:equipmentPage},
        {path:'addEquipment',component:addEquipment},
        {path:'modifyEquipment',component:modifyEquipment},
        {path:'deleteEquipment',component:deleteEquipment},
        {path:'queryEquipment',component:queryEquipment},
        {path:'addEquipmentModel',component:addEquipmentModel},
        {path:'modifyEquipmentModel',component:modifyEquipmentModel},
        {path:'deleteEquipmentModel',component:deleteEquipmentModel},
        {path:'queryEquipmentModel',component:queryEquipmentModel},
        {path:'testRegister',component:testRegister},
        {path:'addUser',component:addUser},
        {path:'modifyUser',component:modifyUser},
        {path:'deleteUser',component:deleteUser},
        {path:'queryUser',component:queryUser},
        {path:'testLogin',component:loginPage},
        {
          path:'/borrowEquipment',
          component:borrowEquipment,
          children:[
            {path:'',component:addBorrow}
          ]
        }
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
    },
    {
      path:'*',
      component:error
    }
  ]
})


