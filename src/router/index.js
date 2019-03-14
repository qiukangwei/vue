import Vue from 'vue'
import Router from 'vue-router'    //路由组件
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'

Vue.use(Router)                    //显示声明要用路由

export default new Router({        //注册路由
  routes: [
    {
      path: '/',
      name: 'HelloWorld',         //单纯用于做识别的,无实用
      component: HelloWorld
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})


