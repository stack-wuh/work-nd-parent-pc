<template>
  <section class="father">
    <wrap-top>
      <span slot="left">学生信息</span>
      <span slot="right">学生: 40人</span>
    </wrap-top>
    <search type="student" />
    <section class="content">
      <my-table :info="info" />
      <bottom />
    </section>
  </section>
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import Search from '@/components/common/search'
import MyTable from '@/components/common/myTable'
import Bottom from '@/components/common/bottom'
export default {
  components:{
    WrapTop,
    Search,
    MyTable,
    Bottom
  },
  data(){
    return{
      info:[
        {
          name:'shadow',
          klass:'软测0101',
          number:'112211',
          phone:'13123123',
          no:'123123123123',
          is_concat:'否',
          a_number:'aasdasd',
          c_phone:'123123123'
        }
      ]
    }
  }
}
</script>


<style lang="less" scoped>

</style>
