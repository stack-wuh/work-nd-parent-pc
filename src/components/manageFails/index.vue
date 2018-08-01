<template>
  <section class="father">
    <wrap-top>
      <span slot="left">挂科查询</span>
    </wrap-top>
    <nav class="nav">
      <ul>
        <li @click="chooseItem(index)" :class="{active : index == current}" v-for="(item,index) in navList" :key="index">{{item.name}}</li>
      </ul>
    </nav>
    <search type="fail" />
    <section class="content">
     <my-table :info="$store.state.fails.data" />
     <my-bottom :total="$store.state.fails.total" />
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
      grade:'',
      current:0,
      navList:[
        {
          name:'本学期挂科',
          value:'now',
        },
        {
          name:'累计挂科',
          value:'history',
        },
      ],
      info:[]
    }
  },
  methods:{
    chooseItem(index){
      this.current = index
      let type = index == 0 ? 'now' : 'history' 
      this.$store.dispatch('changeFailsType',{type:type}).then(()=>{
        this.$store.dispatch('getFailsList')
      })
    }
  },
  created(){
    this.$store.dispatch('getFailsList')
  }
}
</script>


<style lang="less" scoped>
@import '../../../static/css/color.less';
.father{
  nav{
    ul{
      padding:10px 0;
      background-color: #D7D7D7;
      li{
        display: inline-block;
        width:100px;
        margin:0 15px;
        padding:5px 15px;
        border:1px solid @base;
        border-radius: 4px;
        text-align: center;
        &:first-of-type{
          margin-right:0;
        }
        &:hover{
          cursor: pointer;
        }
      }
      li.active{
        color: #fff;
        background-color: @base;
      }

    }
  }
}
</style>
