<template>
  <section class="father">
    <span class="nav-title">{{navTitle}}详情</span>
    <section class="content">
      <header class="header">
        <h3>{{info && info.title}}</h3>
        <time>{{info && info.createTime}}</time>
      </header>
      <article v-html="info && info.content"></article>
    </section>
  </section>  
</template>


<script>
export default {
  data(){
    return{
      info:{}
    }
  },
  computed:{
    RootPath(){
      return this.$route.path
    },
    navTitle(){
      let name = ''
      switch(this.RootPath){
        case  '/index/leave/detail' : name = '首页>放假通知>'
          break;
        case '/guide/list/detail' : name = '招生简章>'
          break;
        case '/letter/detail' : name = '告家长书>'
          break;
        case '/index/message/detail' : name = '我的消息>'
          break;
      }
      return name
    }
  },
  created(){
    let query = this.$route.query
    switch(this.RootPath){
      case '/index/leave/detail' : this.$store.dispatch('getInfoDetail',query).then(()=>{setTimeout(()=>{this.info = this.$store.state.index.info},100)})
        break;
      case '/guide/list/detail' : this.$store.dispatch('getGuideList').then(()=>{setTimeout(()=>{this.info = this.$store.state.guide.data[0]},100)})
        break;
      case '/index/message/detail' : this.$store.dispatch('getInfoDetail',query).then(()=>{setTimeout(()=>{this.info = this.$store.state.index.info},100)})
        break; 
    }
    console.log(this.info)
  } 
}
</script>


<style lang="less" scoped>
.father{
  .nav-title{
    font-size: 14px;
    color: #ccc;
  }
  .content{
    display: flex;
    flex-flow: column wrap;
    align-items:flex-start;
    justify-content: center;
    header.header{
      width:100%;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      time{
        margin-top:15px;
        margin-bottom:20px;
        color: #999;
      }
    }
  }
}
</style>

<style scoped>
article >>> img{
  width:100%;
}
</style>
