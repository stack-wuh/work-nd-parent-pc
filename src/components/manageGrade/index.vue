<template>
  <section class="father">
    <wrap-top>
      <span slot="left">成绩管理</span>
      <span slot="right">
        <el-select @change="handleChangeYear" v-model="grade" placeholder="请选择学期">
          <el-option label="1212" value="123123"></el-option>
        </el-select>
      </span>
    </wrap-top>
    <search type="grade" />
    <section class="content">
     <my-table :info="$store.state.grade.data" />
     <my-bottom :total="+$store.state.grade.total" />
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
    }
  },
  methods:{
    chooseItem(index){
      this.current = index
    },
    handleChangeYear(){
      this.$store.dispatch('getStudentScore',{quarter:this.grade})
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
