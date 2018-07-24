<template>
  <section class="father">
    <wrap-top>
      <span slot="left">我的消息</span>
    </wrap-top>
    <nav class="nav">
      <span class="active">待回复消息</span>
      <span>历史消息</span>
    </nav>
    <section class="content">
      <my-table :info="info" ></my-table>
    </section>
  </section>  
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import MyTable from '@/components/common/myTable'
export default {
  components:{
    WrapTop,
    MyTable,
  },
  data(){
    return {
      info:[
        {
          name:'aaa',
          time:'2018年7月15日 10:10'
        },
        {
          name:'bbb',
          time:'2018年7月17日 10:00'
        }
      ]
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
  }

}
</style>
