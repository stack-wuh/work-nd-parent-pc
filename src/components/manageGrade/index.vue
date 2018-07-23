<template>
  <section class="father">
    <wrap-top>
      <span slot="left">成绩管理</span>
      <span slot="right">
        <el-select v-model="grade" placeholder="请选择学期">
          <el-option label="1212" value="123123"></el-option>
        </el-select>
      </span>
    </wrap-top>
    <search type="grade" />
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
      info:[
        {
          name:'shadow',
          klass:'软件工程1',
          number:'1231231',
          abs:'11',
          sort_class:'1',
          sort_grade:'1',
          total:'1',
          fails:'1',
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
