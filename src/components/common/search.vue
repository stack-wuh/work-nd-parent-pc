<template>
  <section class="wrapper">
    <section class="wrap">
      <section class="left">
        <el-button v-if="item.type === 'button'" @click="item.click" v-for="(item,index) in searchList" :key="index">{{item.text}}</el-button>
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
              click:this.handleExport2Excel
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
              click:this.handleClickOpenDialogWithState,
              text:'导入成绩'
            },
            {
              type:'button',
              click:this.handleClickOpenDialog,
              text:'添加',
            },
          ]
        },
        {
          name:'fail',
          list:[
            {
              type:'button',
              click:this.handleClickOpenDialog,
              text:'通知家长'
            },
            {
              type:'select',
              placeholder:'挂科数',
              data:[],
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
              click:this.handleClickOpenDialog
            },
            {
              type:'select',
              placeholder:'出勤率',
              data:[
                {
                  key:'0-10',
                  value:'0-10',
                },
                {
                  key:'10-20',
                  value:'10-20',
                },
                {
                  key:'20-30',
                  value:'20-30',
                },
                {
                  key:'40-50',
                  value:'40-50',
                },
                {
                  key:'60-70',
                  value:'60-70',
                },
                {
                  key:'80-90',
                  value:'80-90',
                },
                {
                  key:'90-100',
                  value:'90-100',
                },
              ],
              value:''
            },
          ]
        },
      ],
      failCheckList:[]
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
    /**
     * 单击导出表格
     */
    handleExport2Excel(){
      this.$store.dispatch('export2Excel')
    },

    /**
     * 选择专业 -- select事件
     */
    handleMajorChange(){
      this.$store.dispatch('getClassesByMajor',{major:this.major})
    },

    /**
     * 选择班级 -- select事件
     * 获取班级内信息
     */
    handleClassChange(e){
      this.$store.dispatch('getSearchDataChange',{classes:e}).then(()=>{
        switch(this.RootPath){
          case 'student' : this.$store.dispatch('getStudentList',{currPageNo:1})
            break;
          case 'fails' : this.$store.dispatch('getFailsList',{currPageNo:1})
            break;
          case 'grade' : this.$store.dispatch('getStudentScore',{currPageNo:1})
            break;
          case 'index' : this.$store.dispatch('indexDataFetch',{currPageNo:1})
            break;
          case 'check' : this.$store.dispatch('getStudentCheckList',{currPageNo:1})
            break;
        }
      })
    },

    /**
     * input-change事件 -- 关键字搜索
     */
    confirmInput(e){
      this.$store.dispatch('getSearchDataChange',{keyWord:e}).then(()=>{
        switch(this.RootPath){
          case 'student' : this.$store.dispatch('getStudentList',{currPageNo:1})
            break;
          case 'fails' : this.$store.dispatch('getFailsList',{currPageNo:1})
            break;
          case 'grade' : this.$store.dispatch('getStudentScore',{currPageNo:1})
            break;
          case 'index' : this.$store.dispatch('indexDataFetch',{currPageNo:1})
            break;
          case 'check' : this.$store.dispatch('getStudentCheckList',{currPageNo:1})
            break;
        }
      })
    },

    /**
     * 向上传递事件-- 打开diaolog对话框
     */
    handleClickOpenDialog(){
      this.$emit('getShowDialog',{isShowDialog:true})
    },
    handleClickOpenDialogWithState(){
      this.$emit('getShowDialogWithState',{isShowDialog:true})
    },
    /**
     * select事件 -- 搜索其他类型内容
     */
    fetchDataByRootName(){  
      let search = {
        isRelevance:this.searchList && this.searchList[1] && this.searchList[1].value,
        failCount:this.searchList && this.searchList[1] && this.searchList[1].value,
        rate:this.searchList && this.searchList[1] && this.searchList[1].value,
        // type:'now',
      }
      this.$store.dispatch('getSearchDataChange',search).then(()=>{
        switch(this.RootPath){
          case 'student' : this.$store.dispatch('getStudentList',{currPageNo:1})
            break;
          case 'fails' : this.$store.dispatch('getFailsList',{currPageNo:1})
            break;
          case 'check' : this.$store.dispatch('changeStudentCheckRate',{min:search.rate.split('-')[0],max:search.rate.split('-')[1],currPageNo:1}).then(()=>{
              this.$store.dispatch('getStudentCheckList')
          })
            break;
        }
      })
    }
  },
  created(){
    this.$store.dispatch('getMajorList')
    var arr = []
    for(var i=1;i<=20;i++){
      var obj = {
        key:i,
        value:i
      }
      arr.push(obj)
    }
    this.data.map(item => {
      if(item.name == 'fail'){
        item.list[1].data = arr
      }
    })
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
