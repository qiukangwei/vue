<template>
  <div id="pageButton">
    <!--使用-->
    <btn v-on:btnClickEvent="doSth" msg="我可以点击" class="small" >
      <img slot="icon" class="ico" src="../assets/btn.png"/>
    </btn>
    <btn v-on:btnClickEvent="doSth2" msg="我也可以点击"></btn>
    <p></p><a href="/index">返回首页</a>
  </div>
</template>

<script>
  import btn from '../components/Button'
  export default {
    name:'pageButton',
    components:{
      'btn':btn
    },
    methods:{
      doSth:function() {
        alert('你点击了组件的click:btnClickEvent');
      },
      doSth2:function(){
        alert('你点击了另一个组件,这是另一个组件的click:btnClickEvent');
      }
    }
  }
</script>

<style scoped>
  div{
    background-color: antiquewhite;
    height:600px;
  }
</style>
