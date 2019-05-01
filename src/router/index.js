import Vue from 'vue';
import Router from 'vue-router';    //路由组件
import store from '@/store/login';
//引用页面模板->供路由使用
import index from '@/pages/index';

import equipmentPage from '@/stuff/equipment/equipmentPage';

import addEquipment from '@/stuff/equipment/addEquipment';
import queryEquipment from '@/stuff/equipment/queryEquipment';
import modifyEquipment from '@/stuff/equipment/modifyEquipment';
import deleteEquipment from '@/stuff/equipment/deleteEquipment';

import addEquipmentModel from '@/stuff/equipmentModel/addEquipmentModel';
import queryEquipmentModel from '@/stuff/equipmentModel/queryEquipmentModel'
import modifyEquipmentModel from '@/stuff/equipmentModel/modifyEquipmentModel';
import deleteEquipmentModel from '@/stuff/equipmentModel/deleteEquipmentModel';

import testRegister from '@/stuff/user/register';

import addUser from '@/stuff/user/addUser';
import modifyUser from '@/stuff/user/modifyUser';
import deleteUser from '@/stuff/user/deleteUser';
import queryUser from '@/stuff/user/queryUser';

//网页公共页面
import CustomerPage from '@/customer/page/CustomerPage';
import cIndex from '@/customer/cIndex';
import cfind from '@/customer/cFindEquipment'
import login from '@/login/pages/login';
import register from '@/user/register';
import stuffLogin from '@/login/pages/stuffLogin';

//客户页面
import myTrade from '@/customer/myTrade'
import cReceiveEquipment from '@/customer/cReceiveEquipment'
import customerCenter from '@/customer/customerCenter'
import AccountInfo from '@/customer/AccountInfo'
import AccountSetting from '@/customer/AccountSetting'
import cQueryEquipment from '@/customer/cQueryEquipment'
import ChangePassword from '@/customer/ChangePassword'
import centerIndex from '@/customer/centerIndex'
import success from '@/customer/success'
import cLoanEquipment from '@/customer/LoanEquipment/cLoanEquipment'
import confirmTrade from '@/customer/LoanEquipment/confirmTrade'
import confirmTrade2 from '@/customer/LoanEquipment/confirmTrade2'
import confirmTrade3 from '@/customer/LoanEquipment/confirmTrade3'
//员工页面
import stuffPage from '@/stuff/stuffPage';
//借用交易模块
import loanEquipment from '@/trade/loanEquipment';
import queryTrade from '@/trade/queryTrade';
import modifyTrade from '@/trade/modifyTrade';
import receiveEquipment from '@/trade/receiveEquipment';
import deleteTrade from '@/trade/deleteTrade';

import position from '@/stuff/position/position'

import queryStorage from '@/storage/queryStorage';
import storage from '@/storage/storage';
import error from '@/result/pages/404';

Vue.use(Router)                    //显示声明要用路由

const routes = [
  {
    path:'/',
    component:cPage,
    children:[
      { path:'',
        component:cIndex,
      },
      { path:'login',component:login},
      { path:'register',component:register},
      { path:'cfind',component:cfind},
      { path:'customerCenter',component:customerCenter,meta:{
          requireAuth:false
        },
        children:[
          { path:'',component:centerIndex},
          { path:'myTrade',component:myTrade},
          { path:'cLoanEquipment',
            component:cLoanEquipment,
            children:[
              { path:'',component:confirmTrade},
              { path:'step1',component:confirmTrade2},
              { path:'step2',component:confirmTrade3},
              { path:'step3',component:success},
            ]
          },
          { path:'success',component:success},
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
    path:'/stufflogin',
    component:stuffPage,
    children:[
      {path:'',component:stuffLogin}
    ]
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
      {path:'queryStorage',component:queryStorage},
      {path:'storage',component:storage},

      {path:'loanEquipment',component:loanEquipment},
      {path:'queryTrade',component:queryTrade},
      {path:'modifyTrade',component:modifyTrade},
      {path:'receiveEquipment',component:receiveEquipment},
      {path:'deleteTrade',component:deleteTrade},
      {path:'position',component:position}
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





