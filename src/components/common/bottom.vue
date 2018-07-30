<template>
  <section class="wrapper">
    <section class="wrap">
      <el-pagination layout="total,prev,pager,next,jumper" :page-size="10" :total="total"></el-pagination>
    </section>
  </section>  
</template>

<script>
export default {
  props:['total']
}
</script>


<style lang="less" scoped>
.wrapper{
  .wrap{
    margin-top: 15px;
    text-align: center;
  }
}
</style>
