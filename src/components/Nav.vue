<template>
  <div class="nav nav-type-1">
    <a v-for="(item,index) in items" :class="[commonClass,item.active?activeClass :'']" v-on:click="navClickEvent(items,index)"><!--关键代码-->
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>

<script>
    export default {
      data:function(){
        return{
          commonClass:'nav-item',
          activeClass:'active',
          items:[
            {
              text:'首页',
              active:true
            },
            {
              text:'列表',
              active:false
            },
            {
              text:'关于',
              active:false
            },
            {
              text:'招聘',
              active:false
            }
          ]
        }
      },
      methods:{
        navClickEvent:function (items,index) {
          /*默认切换类的动作*/
          items.forEach(function(el){
            el.active=false;
          });
          items[index].active = true;
          /*开放用户自定义的接口*/
          this.$emit('navClickEvent',items,index);
        }
      }
    }
</script>

<style scoped>
  .nav{
    text-align:center;
  }
  .nav-txt{
    margin:0px 50px;
    background-color: aquamarine;
  }
  .nav-item{
    background-color: darkorange;
  }
  .active{
    background-color: chartreuse;
  }
</style>
