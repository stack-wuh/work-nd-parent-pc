<template>
  <section class="wrapper">
    <section class="wrap">
      <section class="left">
        <el-button v-if="item.type === 'button'" v-for="(item,index) in searchList" :key="index">{{item.text}}</el-button>
        <el-select v-model="major" @change="handleMajorChange" clearable placeholder="请选择专业" style="width:180px;">
          <el-option v-for="(item,index) in $store.state.majorList" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <el-select @change="handleClassChange" v-model="klass" clearable placeholder="请选择班级" style="width:180px;">
          <el-option v-for="(item,index) in $store.state.classesList" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <el-select @change="fetchDataByRootName" v-if="item.type === 'select'" clearable v-for="(item,index) in searchList" :placeholder="item.placeholder" :key="index" v-model="item.value" style="width:180px">
          <el-option v-for="(op,oi) in item.data" :label="op.key" :value="op.value" :key="oi"></el-option>
        </el-select>
      </section>
      <section class="right">
        <el-input @change="confirmInput" @confirm="confirmInput" placeholder="请输入关键字" v-model="keyword" clearable></el-input>
      </section>
    </section>
  </section>
</template>


<script>
export default {
  props:['type','current'],
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
              data:[{key:'是',value:'0'},{key:'否',value:'1'}],
              value:'',
              prop:'isRelevance'
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
              data:[{key:'10',value:10},{key:'20',value:20},{key:'30',value:30}],
              value:'',
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
              data:['aa','bb','vv'],
              value:''
            },
          ]
        },
      ],
    }
  },
  computed:{
    searchList(){
      return  this.data && this.data.find(item => item.name === this.type) 
                  && this.data.find(item => item.name === this.type).list
    },
    RootPath(){
      return this.$route.name
    }
  },
  methods:{
    handleMajorChange(){
      this.$store.dispatch('getClassesByMajor',{major:this.major})
    },
    handleClassChange(e){
      this.$store.dispatch('getSearchDataChange',{classes:e}).then(()=>{
        switch(this.RootPath){
          case 'student' : this.$store.dispatch('getStudentList')
            break;
        }
      })
    },
    confirmInput(e){
      this.$store.dispatch('getSearchDataChange',{keyWord:e}).then(()=>{
        switch(this.RootPath){
          case 'student' : this.$store.dispatch('getStudentList')
            break;
        }
      })
    },
    fetchDataByRootName(){  
      let search = {
        isRelevance:this.searchList && this.searchList[1] && this.searchList[1].value,
        failCount:this.searchList && this.searchList[1] && this.searchList[1].value,
        type:'now',
      }
      this.$store.dispatch('getSearchDataChange',search).then(()=>{
        switch(this.RootPath){
          case 'student' : this.$store.dispatch('getStudentList')
            break;
        }
      })
      // switch(this.RootPath){
      //   case 'student1' : this.$store.dispatch('getStudentList',search) 
      //     break;
      //   case 'grade' : this.$store.dispatch('getStudentScore',search)
      //     break; 
      //   case 'fails' : this.$store.dispatch('getFailsList',search)
      //     break;
      //   case 'index' : this.$store.dispatch('indexDataFetch',search)
      //     break;
      // }
    }
  },
  created(){
    this.$store.dispatch('getMajorList')
    this.fetchDataByRootName()
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
