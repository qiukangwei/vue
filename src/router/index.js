import Vue from 'vue'
import Router from 'vue-router'    //路由组件
//引用页面模板->供路由使用
import login from '@/login/pages/loginPage'

Vue.use(Router)                    //显示声明要用路由

export default new Router({        //注册路由
  routes: [
    {path:'/login',name:'login',component:login}
  ]
})


