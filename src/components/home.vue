<template>
  <section class="home">
    <my-leftmenu class="leftmenu" />
    <section class="main">
      <my-header class="header" />
      <section class="body">
        <router-view />
      </section>
    </section>
  </section>
</template>


<script>
import MyHeader from '@/components/common/header'
import MyLeftmenu from '@/components/common/leftmenu'
export default {
  components:{
    MyHeader,
    MyLeftmenu,
  }
}
</script>


<style lang="less">
.home{
  display: flex;
  height:100%;
  box-sizing: border-box;
  .leftmenu{
    width:220px;
    min-width:200px;
    color: #fff;
    background-color: #2F3534;
  }
  .main{
    flex:1;
    display: flex;
    flex-flow:column nowrap;
    height:100%;
    background-color: #F2F2F2;
    box-sizing: border-box;
    .body{
      display: flex;
      margin:20px;
      padding:20px;
      height:100%;
      background-color: #fff;
      box-sizing: border-box;
    }
  }
}
</style>
