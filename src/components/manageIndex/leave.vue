<template>
  <section class="father">
    <wrap-top>
      <span slot="left">放假通知</span>
    </wrap-top>
    <nav class="nav">
      <span :class="{active:view == 'publish'}" @click="view = 'publish'">发布通知</span>
      <span :class="{active:view == 'history'}" @click="view = 'history'">历史记录</span>
    </nav>
    <section class="content">
      <component :is="view"></component>
    </section>
  </section>  
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import Publish from '@/components/manageIndex/child/publish' 
import History from '@/components/manageLetter/child/history' 
export default {
  components:{
    WrapTop,
    Publish,
    History
  },
  data(){
    return{
      view:'publish'
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../../static/css/color.less';
.father{
  nav.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:220px;
    margin-bottom:20px;
    span{
      flex:1;
      padding:10px 0;
      border:1px solid @base;
      text-align: center;
      &:hover{
        cursor: pointer;
      }
    }
    span.active{
      color:#fff;
      background-color: @base;
    }
  }
}
</style>
