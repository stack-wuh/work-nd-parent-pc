<template>
  <section class="father">
    <wrap-top>
      <span slot="left">常用功能</span>
      <span slot="right"></span>
    </wrap-top>
    <section class="list">
      <ul>
        <li @click="jump2other(item.path)" v-for="(item,index) in list" :key="index">
          <img :src="item.icon" :alt="item.name">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </section>
    <search  />
    <wrap-top>
      <span slot="left">教职工信息</span>
    </wrap-top>
    <section class="content">
      <my-table :info="$store.state.index.data" class="my-table"></my-table>
      <my-bottom class="my-bottom" :total="$store.state.index.total" :currentPage="$store.state.index.currentPage" />
    </section> 
  </section>
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import Search from '@/components/common/search'
import MyTable from '@/components/common/myTable'
import MyBottom from '@/components/common/bottom'
export default {  
  components:{
    WrapTop,
    Search,
    MyTable,
    MyBottom
  },
  data(){
    return{
      list:[
        {
          name:'考勤管理',
          icon:'../../static/img/list-1.png',
          path:'/check'
        },
        {
          name:'成绩管理',
          icon:'../../static/img/list-2.png',
          path:'/grade'
        },
        {
          name:'挂科查询',
          icon:'../../static/img/list-3.png',
          path:'/fails'
        },
        {
          name:'告家长书',
          icon:'../../static/img/list-4.png',
          path:'/letter'
        },
        {
          name:'放假通知',
          icon:'../../static/img/list-5.png',
          path:'/index/leave'
        },
        {
          name:'期末总结',
          icon:'../../static/img/list-6.png',
          path:'/index/summary'
        },
        {
          name:'我的消息',
          icon:'../../static/img/list-7.png',
          path:'/index/message'
        }
      ],
    }
  },
  methods:{
    jump2other(path){
      this.$router.push({path:path})
    }
  },
  created(){
    this.$store.dispatch('indexDataFetch')
  }
}
</script>

<style lang="less" scoped>
.father {
  .list {
    margin: 15px 0;
    ul {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      li {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        img {
          margin-bottom: 10px;
          &:hover {
            cursor: pointer;
            transform: scale3d(1.1, 1.1, 1.1) translate(-10px);
            transition: all 0.5s linear;
          }
        }
      }
    }
  }
  .content {
    padding-bottom: 20px;
  }
}
</style>
