<template>
  <section class="father">
    <wrap-top>
      <span slot="left">考勤管理</span>
      <span slot="right">
        <el-select v-model="grade" placeholder="请选择学期">
          <el-option label="1212" value="123123"></el-option>
        </el-select>
      </span>
    </wrap-top>
    <nav>
      <ul>
        <li>分类: </li>
        <li @click="chooseItem(index)" v-for="(item,index) in navList" :key="index" :class="{active: index == current}">{{item.name}}</li>
      </ul>
    </nav>
    <search type="check" />
    <section class="content">
     <my-table :info="info" />
     <my-bottom />
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
          name:'全部',
          value:'',
        },
        {
          name:'课程考勤',
          value:'',
        },
        {
          name:'晚点名考勤',
          value:'',
        },
        {
          name:'宿舍考勤',
          value:'',
        },
        {
          name:'会议讲座考勤',
          value:'',
        },
        {
          name:'其他考勤',
          value:'',
        }
      ],
      info:[
        {
          name:'shadow',
          klass:'软件工程1',
          number:'1231231',
          check_type:'默认类型',
          later:'10',
          out:'0',
          leave:'22',
          check_rota:'10%',
        }
      ]
    }
  },
  methods:{
    chooseItem(index){
      this.current = index
    }
  }
}
</script>


<style lang="less" scoped>
@import '../../../static/css/color.less';
.father{
  nav{
    ul{
      li{
        display: inline;
        margin:0 15px;
        &:first-of-type{
          margin-right:0;
        }
        &:hover{
          cursor: pointer;
        }
      }
      li.active{
        color: @base;
      }

    }
  }
}
</style>
