<template>
  <header class="header">
    <div class="img-box">
      <img src="../../../static/img/logo.png" alt="logo">
    </div>
    <div>
      <span @click="logout" class="my-icon-dianyuan">退出</span>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$http("manageUser/loginOut.do").then(res=>{
        let error = res.status == 0 ? 'success' : 'error'
        _g.toastMsg(status,res.msg)
        if(res.status == 0){
          setTimeout(()=>{
            this.$router.replace('/login')
          },1000)
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
header.header{
  display: flex;
  align-items:center;
  justify-content: space-between;
  height:80px;
  padding-right:60px;
  background-color: #009489;
  .my-icon-dianyuan{
    font-size: 20px;
    color: #fff;
    &:before{
      margin-right:8px;
    }
  }
}
</style>
