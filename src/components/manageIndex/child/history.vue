<template>
  <section class="father">
    <my-table type="message1" :info="$store.state.index.data" />
  </section>
</template>


<script>
import MyTable from '@/components/common/myTable'
export default {  
  components:{
    MyTable,
  }

}
</script>


<style lang="less" scoped>

</style>
