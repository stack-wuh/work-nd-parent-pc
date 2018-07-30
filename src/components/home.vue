<template>
  <section class="home">
    <my-leftmenu class="leftmenu" />
    <section class="main">
      <my-header class="header" />
      <section class="container">
        <transition name="fade" mode="out-in">
            <router-view v-loading="loading" />
        </transition>
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
  },
  computed:{
    loading(){
      return this.$store.state.globalLoading
    }
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
    .container{
      display: flex;
      margin:20px;
      padding:20px;
      height:100%;
      background-color: #fff;
      box-sizing: border-box;
      overflow-y: scroll;
    }
  }
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .3s ease 
}
.fade-fade-enter, .fade-leave-to{
  opacity: 0
}
</style>
