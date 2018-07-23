<template>
  <section class="father">
    <wrap-top>
      <span slot="left">常用功能</span>
      <span slot="right"></span>
    </wrap-top>
    <section class="list">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <img :src="item.icon" :alt="item.name">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </section>
    <search />
    <wrap-top>
      <span slot="left">教职工信息</span>
    </wrap-top>
    <section class="content">
      <my-table :info="info"></my-table>
      <my-bottom  />
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
        },
        {
          name:'成绩管理',
          icon:'../../static/img/list-2.png',
        },
        {
          name:'挂科查询',
          icon:'../../static/img/list-3.png'
        },
        {
          name:'告家长书',
          icon:'../../static/img/list-4.png'
        },
        {
          name:'放假通知',
          icon:'../../static/img/list-5.png',
        },
        {
          name:'期末总结',
          icon:'../../static/img/list-6.png'
        },
        {
          name:'我的消息',
          icon:'../../static/img/list-7.png'
        }
      ],
      info:[
        {
          number:'123123',
          name:'shadow',
          post:'教授',
          klasses:'aa,bb,cc',
          phone:'182828282',
          qq:'asdasd',
          weixin:'asdasd',
          email:'asdasd@qq.com',
          location:'湖北省武汉市洪山区XXXXX',
        },
        {
          number:'123123',
          name:'shadow',
          post:'教授',
          klasses:'aa,bb,cc',
          phone:'182828282',
          qq:'asdasd',
          weixin:'asdasd',
          email:'asdasd@qq.com',
          location:'湖北省武汉市洪山区XXXXX',
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.father{
  .list{
    margin:15px 0;
    ul{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;      
      li{
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

</style>
