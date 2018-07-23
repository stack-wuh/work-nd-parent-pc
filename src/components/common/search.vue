<template>
  <section class="wrapper">
    <section class="wrap">
      <section class="left">
        <el-select v-model="major" placeholder="请选择专业">
          <el-option label="aaa" value="aaa"></el-option>
          <el-option label="aa1" value="aa1"></el-option>
          <el-option label="aa2" value="aa2"></el-option>
        </el-select>
        <el-select v-model="klass" placeholder="请选择班级">
          <el-option label="bb1" value="11"></el-option>
          <el-option label="bb2" value="21"></el-option>
          <el-option label="bb3" value="31"></el-option>
        </el-select>
      </section>
      <section class="right">
        <el-input placeholder="请输入关键字" v-model="keyword"></el-input>
      </section>
    </section>
  </section>
</template>


<script>
export default {
  data(){
    return{
      klass:'',
      major:'',
      keyword:'',
      data:[
        {
          name:'student',
          list:[
            {
              type:'button',
              text:'导出表格',
              click:''
            },
            {
              type:'select',
              placeholder:'是否关联',
              data:['是','否']
            },
          ]
        },
        {
          name:'grade',
          list:[
            {
              type:'button',
              click:'',
              text:'导入成绩'
            },
            {
              type:'button',
              click:'',
              text:'添加',
            },
          ]
        },
        {
          name:'fail',
          list:[
            {
              type:'button',
              click:'',
              text:'通知家长'
            },
            {
              type:'select',
              placeholder:'挂科数',
              data:['10','20','30']
            },
          ]
        },
        {
          name:'check',
          list:[
            {
              type:'button',
              text:'通知家长',
              click:''
            },
            {
              type:'select',
              placeholder:'出勤率',
              data:['aa','bb','vv']
            },
          ]
        }
      ],
    }
  }
}
</script>


<style lang="less" scoped>
.wrapper{
  .wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height:60px;
    padding:0 15px;
    margin:20px 0;
    background-color: #D7D7D7;
  }
}
</style>
