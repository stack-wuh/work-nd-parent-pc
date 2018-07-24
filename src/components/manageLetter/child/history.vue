<template>
  <section class="father">
    <my-table :info="info" />
  </section>
</template>


<script>
import MyTable from '@/components/common/myTable'
export default {
  components:{
    MyTable
  },
  data(){
    return{
      info:[
        {
          name:'给家长的一封信',
          time:'2018年7月24日 10:10'
        },
        {
          name:'给家长的一封信',
          time:'2018年7月24日 10:11'
        }
      ]
    }
  }
}
</script>


<style lang="less" scoped>

</style>
