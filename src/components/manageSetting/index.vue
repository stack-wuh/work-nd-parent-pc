<template>
  <section class="father">
    <wrap-top>
      <span slot="left">系统设置</span>
    </wrap-top>
    <nav class="nav">
      <span>角色管理</span>
      <el-button size="small">添加</el-button>
    </nav>
    <my-table :info="info" />
  </section>
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import MyTable from '@/components/common/myTable'
export default {
  components:{
    WrapTop,
    MyTable
  },
  data(){
    return {
      info:[
        {
          name:'shadow',
          number:'112123',
          post:'辅导员',
          area:'软件工程1201'
        }
      ]
    }
  }
}
</script>


<style lang="less" scoped>
.father{
  nav.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height:40px;
    margin-bottom:20px;
    background-color: #D7D7D7;
    padding:0 15px;
    span{
      font-size: 15px;
    }
  }
}
</style>
