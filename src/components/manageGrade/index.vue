<template>
  <section class="father">
    <wrap-top>
      <span slot="left">成绩管理</span>
      <span slot="right">
        <el-select clearable @change="handleChangeYear" v-model="grade" placeholder="请选择学期">
          <el-option v-for="(item,index) in $store.getters.quarterList" :label="item" :value="item" :key="index"></el-option>
        </el-select>
      </span>
    </wrap-top>
    <search @getShowDialogWithState='getShowDialogWithState' @getShowDialog="getShowDialog" type="grade" />
    <section class="content">
     <my-table @getDetailInfo="getDetailInfo" @getRowDataWithDialog="getRowDataWithDialog" :info="$store.state.grade.data" />
     <my-bottom :total="+$store.state.grade.total" :currentPage="$store.state.grade.currentPage" />
    </section>
    
    <!--添加新成绩-->
    <el-dialog :title="title" :visible.sync="dialogVisible">
      <el-form label-width="120px" :model="myForm" ref="myForm">
        <el-form-item v-for="(item,index) in form.info" :key="index" :label="item.label" :rules="item.rules" :prop="item.prop">
          <el-input v-if="item.type == 'input'" :disabled="!item.disabled" class="my-input-220" v-model="myForm[item.prop]" :placeholder="'请编辑'+ item.label"></el-input>
          <el-select v-if="item.type == 'select'" :disabled="!item.disabled" v-model="myForm[item.prop]" :placeholder="'请选择'+item.label">
            <el-option v-for="(ii,ld) in item.list " :key="ld" :label="ii" :value='ii'></el-option>
          </el-select>
        </el-form-item>
        <p>学科成绩 <el-button @click="addItemInList" :disabled="!btnDisabled" size="mini" style="margin-left:20px;">添加</el-button></p>
          <section class="list">
            <section class="list-item" v-for="(item,index) in form.list" :key="index">
                <section class="item" v-for="(list,lid) in item" :key="lid">
                  <el-input :disabled="!list.disabled" size="small" v-if="list.type == 'input'" :placeholder="'请编辑'+list.label" v-model="myForm.data[index][list.prop]" clearable :style="list.style"></el-input>
                  <el-switch :disabled="!list.disabled" v-if="list.type == 'switch'" v-model="myForm.data[index][list.prop]" :active-value="0" :inactive-value="1" active-text="是否挂科"></el-switch>
                </section>
            </section>
          </section>
      </el-form>
      <div slot="footer">
        <el-button @click="reset" type="" size="small">取消</el-button>
        <el-button :disabled="!btnDisabled" @click="submit" type="primary" size="small">确定</el-button>
      </div>
    </el-dialog>
    <!--导入成绩-->
    <el-dialog title="导入成绩" :visible.sync="dialogVisibleImport">
      <p>若没有模板请先下载后,导入学生成绩!<el-button type="" size="small" style="margin-left:20px;">下载模板</el-button></p>
      <el-upload
        :action="uploadUrl"
        name="upload_file"
        :on-success="handleUploadSuccess"
      > 
        <el-button type="primary" size="small">导入学生成绩</el-button>   
      </el-upload>
      <div slot="footer">
        <el-button @click="handleReset" size="small" type="">取消</el-button>
        <el-button @click="handleSubmit" size="small" type="primary">确定</el-button>
      </div>
    </el-dialog>
  </section>
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import Search from '@/components/common/search'
import MyTable from '@/components/common/myTable'
import MyBottom from '@/components/common/bottom'
const baseList = [
   {
              label:'课程名称',
              value:'',
              type:'input',
              prop:'className',
              disabled:true,
              style:'width:180px;',
            },
            {
              label:'成绩',
              value:'',
              type:'input',
              prop:'score',
              disabled:true,
              style:'width:120px;margin:0 15px;'
            },
            {
              label:'学分',
              value:'',
              type:'input',
              prop:'credit',
              disabled:true,
              style:'width:120px;margin-right:15px;'
            },
            {
              label:'是否挂科',
              value:1,
              prop:'isFail',
              disabled:true,
              type:'switch',
            }
]
const baseObj ={
            className:'',
            score:'',
            credit:'',
            isFail:'1',
          }
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
      dialogVisible:false,  // 添加--更改 -- dialog
      dialogVisibleImport:false,  // 导入新成绩 -- dialog
      baseList:baseList,
      baseObj:baseObj,
      form:{
        info:[
          {
            label:'姓名',
            value:'',
            type:'input',
            prop:'name',
            disabled:true,
            rules:[
              {
                required:true,
                message:'请编辑姓名',
                trigger:['blur']
              }
            ]
          },
          {
            label:'学年季度',
            value:'',
            type:'select',
            prop:'quarter',
            disabled:true,
            rules:[
              {
                required:true,
                message:'请选择学年季度',
                trigger:['blur','change']
              }
            ],
            list:this.$store.getters.quarterList
          },
          {
            label:'专业班级',
            value:'',
            type:'select',
            prop:'classes',
            disabled:true,
            rules:[
              {
                required:true,
                message:'请编辑专业班级',
                trigger:'blur'
              }
            ],
            list:['软件1501']
          },
          {
            label:'学号',
            value:'',
            type:'input',
            prop:'number',
            disabled:true,
            rules:[
              {
                required:true,
                message:'请编辑学号',
                trigger:'blur'
              }
            ]
          },
          {
            label:'平均成绩',
            value:'',
            type:'input',
            prop:'averageScore',
            disabled:true,
            rules:[
              {
                required:true,
                message:'请编辑平均成绩',
                trigger:'blur'
              }
            ]
          },
          {
            label:'班级排名',
            value:'',
            type:'input',
            prop:'classRank',
            disabled:true,
            rules:[
              {
                required:true,
                message:'请编辑班级排名',
                trigger:'blur'
              }
            ]
          },
          {
            label:'年级排名',
            value:'',
            type:'input',
            prop:'gradeRank',
            disabled:true,
            rules:[
              {
                required:true,
                message:'请编辑年级排名',
                trigger:'blur'
              }
            ]
          },
          {
            label:'所得学分',
            value:'',
            type:'input',
            prop:'credit',
            disabled:true,
            rules:[
              {
                required:true,
                message:'请编辑所得学分',
                trigger:'blur'
              }
            ]
          }
        ],
        list:[
          [
            {
              label:'课程名称',
              value:'',
              type:'input',
              prop:'className',
              disabled:true,
              style:'width:180px;',
            },
            {
              label:'成绩',
              value:'',
              type:'input',
              prop:'score',
              disabled:true,
              style:'width:120px;margin:0 15px;'
            },
            {
              label:'学分',
              value:'',
              type:'input',
              prop:'credit',
              disabled:true,
              style:'width:120px;margin-right:15px;'
            },
            {
              label:'是否挂科',
              value:1,
              prop:'isFail',
              disabled:true,
              type:'switch',
            }
          ],
        ]
      },
      myForm:{
        name:'',
        quarter:'',
        classes:'',
        number:'',
        averageScore:'',
        classRank:'',
        gradeRank:'',
        credit:'',
        data:[
          {
            className:'',
            score:'',
            credit:'',
            isFail:'1',
          }
        ]
      },
      btnDisabled:true,
      title:'编辑学生成绩',
      uploadUrl:rootPath + 'ScoreManage/inScoreList.do'
    }
  },
  methods:{
    handleUploadSuccess(res){
      let error = res.status == 0 ? 'success' : 'error'
      _g.toastMsg(error,res.msg)
      if(res.status == 0){
        setTimeout(()=>{
          this.handleReset()
          this.$store.dispatch('getStudentScore')
        },1000)
      }
    },
    /**
     * 导入成绩 -- 取消
     */
    handleReset(){
      this.dialogVisibleImport = false
    },
    /**
     * 导入成绩 -- 确定
     */
    handleSubmit(){
      this.dialogVisibleImport = false
    },
    /**
     * 导入成绩
     */
    getShowDialogWithState(e){
      this.dialogVisibleImport = e.isShowDialog
    },
    /**
     * 获取学生信息列表
     */
    getStudentList(e){
      $http('ScoreManage/getScoreInfo.do',{id:e.data.id}).then(res=>{
        this.myForm = Object.assign(this.myForm,res.data)
        var arr = this.form.list[0]
        this.form.list = []
        res.data.scoreInfoList.map((item,index)=>{
          this.form.list.push(arr)
          this.myForm.data[index] = item
        })
      }) 
    },
    formatStudentList(){
      this.form.info.map(item => {
        item = Object.assign(item,{disabled:this.btnDisabled})
      })
      this.form.list.map(item => {
        item.map(list => {
          list = Object.assign(list,{disabled:this.btnDisabled})
        })
      })
    },
    /**
     * 获取学生信息详情
     */
    getDetailInfo(e){
      this.dialogVisible = e.isShowDetail
      this.title = '查看学生成绩详情'
      this.btnDisabled = false
      this.getStudentList(e)
      this.formatStudentList()
    },

    /**
     * 编辑学生成绩信息
     */
    getRowDataWithDialog(e){
      this.dialogVisible = e && e.isShowDialog
      this.btnDisabled = true
      this.getStudentList(e)
      this.formatStudentList()
    },

    getShowDialog(e){
      this.dialogVisible = e.isShowDialog
    },

    chooseItem(index){
      this.current = index
    },

    handleChangeYear(){
      this.$store.dispatch('getStudentScore',{quarter:this.grade})
    },

    addItemInList(){
      var arr = JSON.parse(JSON.stringify(this.form.list[0]))
      var obj = {
            className:'',
            score:'',
            credit:'',
            isFail:'1',
          }
      obj = JSON.parse(JSON.stringify(obj))
      this.form.list.push(arr)
      this.myForm.data.push(obj)
    },

    reset(){
      this.$refs.myForm.resetFields()
      this.form.list = []
      this.form.list[0] = this.baseList
      this.myForm.data = []
      this.myForm.data[0] = this.baseObj
      this.dialogVisible = false
    },

    submit(){
      this.$refs.myForm.validate(valid=>{
        if(valid){
          let data = JSON.parse(JSON.stringify(this.myForm))
          data.data = JSON.stringify(data.data)
          $http('ScoreManage/addStudentScore.do',data).then(res=>{
            let error = res.status == 0 ? 'success' : 'error'
            _g.toastMsg(error,res.msg)
            if(res.status == 0){
              setTimeout(() => {
                this.reset()
                this.$store.dispatch('getStudentScore')
              }, 1000);
            }
          })
        }else{
          _g.toastMsg('warning','请编辑必填项!')
        }
      })
    },
  },
  created(){
    this.$store.dispatch('getStudentScore')
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
  .list{
    display: flex;
    flex-flow: column wrap;
    margin-top:15px;
    .list-item{
      display: flex;
      align-items: center;
      margin-top:10px;
    }
  }
}
</style>
