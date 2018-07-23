<template>
  <section class="wrapper">
    <section class="wrap">
      <header class="header">
        <span>家长端</span>
        <span>管理后台</span>
      </header>
      <div class="list">
        <ul>
          <li v-for="(item,index) in list" :class="{'active':index==0}" >{{item.name}}</li>
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
          name:'首页'
        },
        {
          name:'学生管理'
        },
        {
          name:'考勤管理'
        },
        {
          name:'成绩管理'
        },
        {
          name:'挂科记录'
        },
        {
          name:'告家长书'
        },
        {
          name:'招生简章'
        },
        {
          name:'系统设置'
        }
      ]
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
