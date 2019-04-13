import Vue from 'vue';
import Router from 'vue-router';    //路由组件
import store from '@/store/login';
//引用页面模板->供路由使用
import index from '@/pages/index';

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
//网页公共页面
import cPage from '@/customer/page/cPage';
import cIndex from '@/customer/page/cIndex';
import cfind from '@/customer/page/cFindEquipment'
import loginPage from '@/login/pages/loginPage';
import register from '@/user/components/register'
//客户页面
import myTrade from '@/customer/page/myTrade'
import cLoanEquipment from '@/customer/page/cLoanEquipment'
import cReceiveEquipment from '@/customer/page/cReceiveEquipment'
import customerCenter from '@/customer/page/customerCenter'
import AccountInfo from '@/customer/page/AccountInfo'
import AccountSetting from '@/customer/page/AccountSetting'
import cQueryEquipment from '@/customer/page/cQueryEquipment'
import ChangePassword from '@/customer/page/ChangePassword'
import centerIndex from '@/customer/page/centerIndex'
//员工页面
import stuffLogin from '@/login/components/stuffLogin';
//借用交易模块
import loanEquipment from '@/trade/components/loanEquipment';
import queryTrade from '@/trade/components/queryTrade';
import modifyTrade from '@/trade/components/modifyTrade';
import receiveEquipment from '@/trade/components/receiveEquipment';
import deleteTrade from '@/trade/components/deleteTrade';

import position from '@/position/position'

import queryStorage from '@/storage/components/queryStorage';
import storage from '@/storage/components/storage';
import error from '@/result/pages/404';

Vue.use(Router)                    //显示声明要用路由

const routes = [
  {
    path:'/',
    component:cPage,
    meta:{
      requireAuth:false
    },
    children:[
      { path:'',
        component:cIndex,
        children:[

        ]
      },
      { path:'login',component:loginPage},
      { path: 'register',component:register},
      { path:'cfind',component:cfind},
      { path:'customerCenter',component:customerCenter,meta:{
          requireAuth:false
        },
        children:[
          { path:'',component:centerIndex},
          { path:'myTrade',component:myTrade},
          { path:'cLoanEquipment',component:cLoanEquipment},
          { path:'cReceiveEquipment',component:cReceiveEquipment},
          { path:'AccountInfo',component:AccountInfo},
          { path:'AccountSetting',component:AccountSetting},
          { path:'ChangePassword',component:ChangePassword},
          { path:'cQueryEquipment',component:cQueryEquipment}
        ]
      }
    ]
  },
  {
    path:'/stuffLogin',
    component:stuffLogin
  },
  {
    path:'/stuff',
    component:index,
    meta:{
      requireAuth:false
    },
    children:[
      {path:'', component:position,},
      {path:'equipmentPage', component:equipmentPage},
      {path:'addEquipment',component:addEquipment},
      {path:'modifyEquipment',component:modifyEquipment},
      {path:'deleteEquipment',component:deleteEquipment},
      {path:'queryEquipment',component:queryEquipment},

      {path:'addEquipmentModel',component:addEquipmentModel},
      {path:'modifyEquipmentModel',component:modifyEquipmentModel},
      {path:'deleteEquipmentModel',component:deleteEquipmentModel},
      {path:'queryEquipmentModel', component:queryEquipmentModel},

      {path:'testRegister',component:testRegister},
      {path:'addUser',component:addUser},
      {path:'modifyUser',component:modifyUser},
      {path:'deleteUser',component:deleteUser},
      {path:'queryUser',component:queryUser},
      {path:'testLogin',component:loginPage},
      {path:'queryStorage',component:queryStorage},
      {path:'storage',component:storage},

      {path:'loanEquipment',component:loanEquipment},
      {path:'queryTrade',component:queryTrade},
      {path:'modifyTrade',component:modifyTrade},
      {path:'receiveEquipment',component:receiveEquipment},
      {path:'deleteTrade',component:deleteTrade}
    ]
  },
  {
    path:'/manage',
    redirect:'/'
  },
  {
    path:'*',
    redirect:'/'
  }
];

if (window.localStorage.getItem('isLogin')) {
  store.commit('setIsLogin', window.localStorage.getItem('isLogin'));
}

const router = new Router({        //注册路由
  routes
});

router.beforeEach((to, from, next) => {
  console.log("调用全局守卫")
  if (to.matched.some(r => r.meta.requireAuth)) {  // 判断该路由是否需要登录权限
    console.log(store.isLogin);
    if (store.isLogin) {  // 通过vuex 如果当前有登录
      next();
    }
    else {
      console.log("没有登录吖")
      alert("您没有登录");
      next({
        path: '/',
      })
    }
  }
  else {
    console.log("结束")
    next();
  }
});
export default router





