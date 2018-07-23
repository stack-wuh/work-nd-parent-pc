<template>
  <section class="wrapper">
    <section class="wrap">
      <el-pagination layout="total,prev,pager,next,jumper" :page-size="10" :total="400"></el-pagination>
    </section>
  </section>  
</template>

<script>
export default {
  
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
