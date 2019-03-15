<!--冒号表示绑定一个变量msg-->
<!--keep-alive表示保持组件在内存中常驻,以减少组件变化时的内存消耗-->
<template>
  <div class="list">
    <span class="list-tips">{{tipsText}}</span>
    <component :is="currentView" v-on:btnClickEvent="ClickEvent" :msg=msg class="small" keep-alive></component>
  </div>
</template>

<script>
  import btn from '../components/Button'
  import testarrow from '../components/Arrow'
    export default {
      props:{
        msg:{
          default:'下载'
        },
        tipsText:{
          default:'默认的文案'
        },
        currentView:{
          default:'btn'
        },
        btnClickEvent:{
          type:Function,
          default:function(){
            alert(this.msg+'我是默认事件');
          }
        }
      },
      components:{
        'btn':btn,
        'testarrow':testarrow
      },
      methods:{
        ClickEvent:function(){
          this.btnClickEvent();
          this.$emit('btnClickEvent')
        }
      }
    }
</script>

<style scoped>
  .list{
    padding: 10px 0;
    margin-left: 10px;
    overflow: hidden;
    border-bottom: 1px solid #e0e0e0;
    vertical-align: middle;
    display: flex;
    justify-content:center;
    align-items:Center;
    min-height: 30px;
  }
  .list .btn{
    float: right;
    margin-right: 10px;

  }
  .list .tips{
    padding: 0 5px;
    color: #00A0D8;
    float: left;
    vertical-align: middle;
    flex:1;
    text-align: left;
    font-size: 14px;
  }
</style>
