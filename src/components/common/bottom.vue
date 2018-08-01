<template>
  <section class="wrapper">
    <section class="wrap">
      <el-pagination  :current-page="current" @current-change="handleCurrentChange" layout="total,prev,pager,next,jumper" :page-size="10" :total="total"></el-pagination>
    </section>
  </section>  
</template>

<script>
export default {
  props:['total'],
  data(){
    return {
      current:1
    }
  },
  computed:{
    RootName(){
      return this.$route.name
    }
  },
  methods:{
    handleCurrentChange(e){
      this.$store.dispatch('getSearchDataChange',{currPageNo:e}).then(()=>{
        let _get =''
        switch(this.RootName){
          case 'student' : _get = 'getStudentList'
            break;
          case 'setting' : _get = 'getSettingsAvatars'
            break;
        }
        this.$store.dispatch(_get)
      })
    },
  }
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
