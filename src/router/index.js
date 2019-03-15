import Vue from 'vue'
import Router from 'vue-router'    //路由组件
//引用页面模板->供路由使用
import index from '@/pages/index'
import pageButton from '@/pages/pageButton'
import pageList from '@/pages/pageList'
import pageNav from '@/pages/pageNav'

Vue.use(Router)                    //显示声明要用路由

export default new Router({        //注册路由
  routes: [
    {path:'/',name:'index',component:index},
    {path:'/btn',name:'btn',component:pageButton},
    {path:'/list',name:'list',component:pageList},
    {path:'/nav',name:'nav',component:pageNav}
  ]
})


