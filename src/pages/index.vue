<template>
  <div class="mod-module mod-parallel">
    <div class="img-list type-full">
      <div class="img-box">
        <p class="img-item">
          <a class="page-link" href="#/btn">按钮</a>
        </p>
      </div>
      <div class="img-box">
        <p class="img-item">
          <a class="page-link" href="#/list">列表</a>
        </p>
      </div>
      <div class="img-box">
        <p class="img-item">
          <a class="page-link" href="#/nav">导航</a>
        </p>
      </div>
    </div>
    <btn msg="确定" class="small"></btn>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>
//scoped表示该属性私有
<style scoped>
  .mod-module{
    height: 300px;
    background-color: aquamarine;
  }
</style>
