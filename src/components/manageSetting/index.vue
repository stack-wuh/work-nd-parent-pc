<template>
  <section class="father">
    <wrap-top>
      <span slot="left">系统设置</span>
    </wrap-top>
    <nav class="nav">
      <span>角色管理</span>
      <el-button @click="dialogVisible = true" size="small">添加</el-button>
    </nav>
    <my-table @getRowData="getRowData" :info="$store.getters.formatSettingList" />
    <bottom :total="$store.state.setting.total" />

    <el-dialog title="编辑新角色" :visible.sync="dialogVisible">
      <el-form :model="form" ref="myForm" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请编辑姓名" v-model="form.name" class="my-input"></el-input>
        </el-form-item>
        <el-form-item label="工号" prop="number">
          <el-input placeholder="请编辑工号" v-model="form.number" class="my-input"></el-input>
        </el-form-item>
        <el-form-item label="职务" prop="position">
          <el-select v-model="form.position" placeholder="请选择职务">
            <el-option label="班主任" value="0"></el-option>
            <el-option label="辅导员" value="1"></el-option>
          </el-select>
        </el-form-item>
        <p class="nav-title">管辖班级</p>
        <el-form-item prop="scope">
          <section>
            <section>
              <el-select placeholder="请选择专业" v-model="klass">
                <el-option v-for="(item,index) in $store.state.majorList" :key="index" :label="item" :value="item"></el-option>
              </el-select>
              <el-select placeholder="请选择学年" v-model="year">
                
              </el-select>
            </section>
            <section class="list">
              <el-checkbox-group v-model="form.scope" class="my-check-group">
                <el-checkbox class="my-check" v-for="(item,index) in $store.getters.formatClassesList" :label="item.name" :key="index">{{item.name}}</el-checkbox>
              </el-checkbox-group>
            </section>
          </section>
        </el-form-item>
        <el-form-item class="btn">
          <el-button @click="handleReset" size="small" type="">取消</el-button>
          <el-button @click="handleSubmit" size="small" type="primary">添加</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </section>
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import MyTable from '@/components/common/myTable'
import Bottom from '@/components/common/bottom'

const rules = {
  name:[
    {
      required:true,
      message:'请编辑姓名',
      trigger:'blur'
    }
  ],
  number:[
    {
      required:true,
      message:'请编辑工号',
      trigger:'blur'
    }
  ],
  position:[
    {
      required:true,
      message:'请选择职务',
      trigger:['change','blur']
    }
  ],
  scope:[
    {
      required:true,
      message:'请选择负责班级',
      trigger:['change']
    }
  ]
}
export default {
  components:{
    WrapTop,
    MyTable,
    Bottom
  },
  data(){
    return {
      dialogVisible:false,
      klass:'软件',
      year:'',
      form:{
        name:'',
        number:'',
        position:'',
        scope:[],
      },
      rules:rules
    }
  },
  methods:{
    getRowData(e){
      e = JSON.parse(JSON.stringify(e))
      e.scope = e.scope && e.scope.split(',')
      this.dialogVisible = true
      this.form = e
    },
    handleReset(){
      this.dialogVisible = false
      this.$refs.myForm.resetFields()
      this.checkList = []
    },
    handleSubmit(){
      this.$refs.myForm.validate(valid =>{
        if(valid){
          if(!this.form.scope){
            _g.toastMsg('warning','请勾选负责班级!')
            return 
          }
          this.form = JSON.parse(JSON.stringify(this.form))
          this.form.scope = this.form.scope.toString()
          this.$http('teacherManage/addTeacherRole.do',this.form).then(res=>{
            let error = res.status == 0 ? 'success' : 'error'
            _g.toastMsg(error,res.msg)
            setTimeout(()=>{
              this.handleReset()
              this.$store.dispatch('getSettingsAvatars',{currPageNo:1})
            },1000)
          })
        }else{
          _g.toastMsg('error','请编辑必填项!')
        }
      })
    },
  },
  created(){
    this.$store.dispatch('getClassesByMajor',{major:'软件'})
    this.$store.dispatch('getSettingsAvatars',{currPageNo:1})
  }
}
</script>


<style lang="less" scoped>
.father{
  nav.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height:40px;
    margin-bottom:20px;
    background-color: #D7D7D7;
    padding:0 15px;
    span{
      font-size: 15px;
    }
  }
  .my-input{
    width:220px;
  }
  .nav-title{
    margin:10px 0;
  }
  .my-check-group{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    margin-top:20px;
    .my-check{
      flex:1;
      min-width:120px;
      margin:0;
      margin-top:5px;
    }
  }
  .btn{
    margin-top:20px;
    text-align: center;
  }
}
</style>
