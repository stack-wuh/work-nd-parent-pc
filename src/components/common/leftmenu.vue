<template>
  <section class="wrapper">
    <section class="wrap">
      <header class="header">
        <span>家长端</span>
        <span>管理后台</span>
      </header>
      <div class="list">
        <ul>
          <li @click="jump2other(item.path)" v-for="(item,index) in list" :key="index"
               :class="{active:item && item.routes && item.routes.indexOf($route.path)!==-1}">{{item.name}}</li>
        </ul>
      </div>
    </section>
  </section>
</template>


<script>
export default {
  data(){
    return {
      list:[
        {
          name:'首页',
          path:'index',
          routes:['/index','/index/leave','/index/message','/index/summary','/index/leave/detail','/index/message/detail']
        },
        {
          name:'学生管理',
          path:'student',
          routes:['/student']
        },
        {
          name:'考勤管理',
          path:'check',
          routes:['/check']
        },
        {
          name:'成绩管理',
          path:'grade',
          routes:['/grade']
        },
        {
          name:'挂科记录',
          path:'fails',
          routes:['/fails']
        },
        {
          name:'告家长书',
          path:'letter',
          routes:['/letter','/letter/detail']
        },
        {
          name:'招生简章',
          path:'guideList',
          routes:['/guide','/guide/list','/guide/list/detail']
        },
        {
          name:'系统设置',
          path:'setting',
          routes:['/setting']
        }
      ]
    }
  },
  methods:{
    jump2other(path){
      let reg = /^\/$/
      path = (path && path.match(reg)) ? '/' + path : path
      this.$router.push({name:path})
    }
  }
}
</script>


<style lang="less" scoped>
.wrapper{
  width:220px;
  .wrap{
    width:100%;
    box-sizing: border-box;
    header.header{
      width:100%;
      height:80px;
      line-height:80px;
      text-align:center;
      background-color: #000000;
      span:first-child{
        font-size: 24px;
        margin-right:15px;
      }
    }
  }
  div.list{
    ul{
      li{
        height:60px;
        line-height:60px;
        text-align:center;
        font-size: 20px;
        &:hover{
          cursor: pointer;
          background-color: #434948;
          transition: background .5s linear;
        }
      }
      li.active{
        background-color: #434948;
      }
    }
  }
}
</style>
