import Vue from 'vue'
import Router from 'vue-router'    //路由组件
//引用页面模板->供路由使用
import index from '@/pages/index'
import loginPage from '@/login/pages/loginPage'
import loginsuccessPage from '@/login/pages/loginsuccessPage'

Vue.use(Router)                    //显示声明要用路由

export default new Router({        //注册路由
  routes: [
    {path:'/',name:'index',component:index},
    {path:'/login',name:'loginPage',component:loginPage},
    {path:'/loginsuccess',name:'loginsuccess',component:loginsuccessPage}
  ]
})


