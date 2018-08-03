<template>
  <section class="father">
    <wrap-top>
      <span slot="left">考勤管理</span>
      <span slot="right">
        <el-select @change="$store.dispatch('getStudentCheckList',{quarter:grade})" v-model="grade" placeholder="请选择学期">
          <el-option v-for="(item,index) in $store.getters.quarterList" :label="item" :value="item" :key="index"></el-option>
        </el-select>
      </span>
    </wrap-top>
    <nav>
      <ul>
        <li>分类: </li>
        <li @click="chooseItem(index,item)" v-for="(item,index) in navList" :key="index" :class="{active: index == current}">{{item.name}}</li>
      </ul>
    </nav>
    <search type="check" />
    <section class="content">
     <my-table @getRowDataWithDialog="getRowDataWithDialog" :info="$store.getters.formatCheckList" />
     <my-bottom :total="$store.state.check.total" :currentPage="$store.state.check.currentPage" />
    </section>
    <el-dialog title="学生考勤详情" :visible.sync="dialogVisble">
      <p class="margin-btm-15">{{navList[current].name}}</p>
      <my-table :info="$store.state.check.info" :type="current == 0 ? 'check1' : current ==1 ?  'check2' : current == 2 ? 'check1' : 'check3' " />
    </el-dialog>
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
        // {
        //   name:'全部',
        //   value:'1',
        // },
        {
          name:'晚点名考勤',
          value:'2',
        },
        {
          name:'课程考勤',
          value:'5',
        },

        {
          name:'宿舍考勤',
          value:'3',
        },
        {
          name:'会议讲座考勤',
          value:'4',
        },
        // {
        //   name:'其他考勤',
        //   value:'',
        // }
      ],
      dialogVisble:false
    }
  },
  methods:{
    getRowDataWithDialog(e){
      this.dialogVisble = e.isShowDialog
      let {number,type} = e.data
      this.$store.dispatch('getStudentCheckInfo',{number:number,type:type,currPageNo:1,quarter:this.grade})
    },
    chooseItem(index,item){
      this.current = index
      this.$store.dispatch('getStudentCheckList',{type:item.value,currPageNo:1})
    }
  },
  created() {
    this.$store.dispatch('getStudentCheckList',{type:'2'})
  },
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
  .margin-btm-15{
    margin-bottom:15px;
  }
}
</style>
