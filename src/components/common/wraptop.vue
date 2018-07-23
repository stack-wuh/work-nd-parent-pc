<template>
  <section class="wrapper">
    <section class="wrap">
      <div class="nav-title">
        <slot name="left"></slot>
      </div>
      <div class="right-content">
        <slot name="right"></slot>
      </div>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:15px;
    .nav-title{
      padding-left:15px;
      border-left:4px solid #00998d;
    }
    .right-content{

    }
  }
}
</style>
