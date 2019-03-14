<template>
  <div class="HelloWorld">
    <span v-bind:title="msg">
      鼠标悬停几秒钟查看此处动态绑定的信息
    </span>

  </div>
</template>

<script>
   export default {                 //ES6的模块导出定义语法,此模块导出默认的对象
      name: 'HelloWorld',           //组件名字
      data () {                     //组件的data必须是函数
        return {
      msg:'页面加载于'+new Date().toLocaleString()
     }
   }
 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
