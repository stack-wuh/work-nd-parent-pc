<template>
  <section class="father">
    <wrap-top>
      <span slot="left">告家长书</span>
    </wrap-top>
    <nav>
      <span :class="{active: view == 'publish'}" @click="view = 'publish'">我要编辑</span>
      <span :class="{active:view == 'history'}" @click="view = 'history'">历史记录</span>
    </nav>
    <section class="content">
      <component v-bind:is="view"></component>
    </section>
  </section>
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import Publish from '../../components/manageLetter/child/publish'
import History from '../../components/manageLetter/child/history'
export default {
  components:{
    WrapTop,
    Publish,
    History,
  },
  data(){
    return{
      view:'publish'
    }
  },

}
</script>


<style lang="less" scoped>
@import '../../../static/css/color.less';
.father{
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:220px;
    height:40px;
    margin-bottom:20px;
    border-radius: 6px;
    border:1px solid #eee;
    span{
      flex:1;
      height:40px;
      line-height: 40px;
      text-align: center;
      background-color: #D7D7D7;
      user-select: none;
      &:hover{
        cursor: pointer;
      }
    }
    span.active{
      color: #fff;
      background-color: @base;
    }
  }
}
</style>
