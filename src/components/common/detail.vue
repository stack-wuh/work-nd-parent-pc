<template>
  <section class="father">
    <span class="nav-title">{{navTitle}}详情</span>
    <section class="content">
      <header class="header">
        <h3>{{info && info.title}}</h3>
        <h3 v-if="navTitle == '我的消息>'">待回复消息</h3>
        <time>{{info && info.createTime}}</time>
      </header>
      <article v-html="info && info.content"></article>
    </section>
    <section class="btn-list">
      <el-button @click="backPage" type="" size="small">返回上一页</el-button>
      <el-button @click="submit" type="primary" size="small">回复</el-button>
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
  methods:{
    backPage(){
      this.$router.go(-1)
    },
    submit(){
      this.$prompt('请编辑回复内容','编辑',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
      }).then(({value})=>{
        if(!value){
          _g.toastMsg('error','请编辑发送内容!')
          return
        }
        this.$http('opinionManage/addReply.do',{backId:this.$route.query.id,content:value}).then(res=>{
          let error = res.status == 0 ? 'success' : 'error'
          _g.toastMsg(error,res.msg)
        })
      }).catch(err=>{
        _g.toastMsg('warning','已取消操作!')
      })
    }
  },
  created(){
    let query = this.$route.query
    switch(this.RootPath){
      case '/index/leave/detail' : this.$store.dispatch('getInfoDetail',query).then(()=>{setTimeout(()=>{this.info = this.$store.state.index.info},100)})
        break;
      case '/guide/list/detail' : this.$store.dispatch('getGuideList').then(()=>{setTimeout(()=>{this.info = this.$store.state.guide.data[0]},100)})
        break;
      case '/index/message/detail' : this.$store.dispatch('getNoticeInfo',query).then(()=>{setTimeout(()=>{this.info = this.$store.state.index.info},100)})
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
    // justify-content: center;
    min-height:400px;
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
  .btn-list{
    margin-top:20px;
    text-align: center;
  }
}
</style>

<style scoped>
article >>> img{
  width:100%;
}
</style>
