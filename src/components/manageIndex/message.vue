<template>
  <section class="father">
    <wrap-top>
      <span slot="left">我的消息</span>
    </wrap-top>
    <nav class="nav">
      <span @click="handleClickChange(0)" :class="{active:current == 0}">待回复消息</span>
      <span @click="handleClickChange(1)" :class="{active:current == 1}">历史消息</span>
    </nav>
    <section class="content">
      <my-table v-if="current == 0" :info="$store.state.index.data"></my-table>
      <component v-else :is="componentId"></component>
      <bottom :total="$store.state.index.total" />
    </section>
  </section>  
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import MyTable from '@/components/common/myTable'
import Bottom from '@/components/common/bottom'
import History from '@/components/manageIndex/child/history'
export default {
  components:{
    WrapTop,
    MyTable,
    Bottom,
    History
  },
  data(){
    return {
      current:0,
      componentId:'history'
    }
  },
  methods:{
    handleClickChange(index){
      this.current = index
      if(index == 0){
        this.$store.dispatch('getWillBackNotice')
      }else{
        this.$store.dispatch('getHistoryNotice')
      }
    }
  },
  created(){
    this.$store.dispatch('getWillBackNotice')
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
    height:40px;
    margin-bottom:20px;
    border:1px solid @base;
    border-radius: 6px;
    overflow: hidden;
    span{
      flex:1;
      height:40px;
      line-height:40px;
      text-align: center;
    }
    span.active{
      color: #fff;
      background-color: @base;
    }
    span:hover{
      cursor: pointer;
    }
  }

}
</style>
