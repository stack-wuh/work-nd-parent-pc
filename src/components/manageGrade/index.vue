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
    <search @getShowDialog="getShowDialog" type="grade" />
    <section class="content">
     <my-table @getRowDataWithDialog="getRowDataWithDialog" :info="$store.state.grade.data" />
     <my-bottom :total="+$store.state.grade.total" />
    </section>
    <el-dialog title="编辑学生成绩" :visible.sync="dialogVisible">
      <el-form label-width="120px" :model="myForm" ref="myForm">
        <el-form-item v-for="(item,index) in form.info" :key="index" :label="item.label" :rules="item.rules" :prop="item.prop">
          <el-input v-if="item.type == 'input'" class="my-input-220" v-model="myForm[item.prop]" :placeholder="'请编辑'+ item.label"></el-input>
          <el-select v-if="item.type == 'select'" v-model="myForm[item.prop]" :placeholder="'请选择'+item.label">
            <!-- <el-option label="软件02" value="软件02"></el-option> -->
            <el-option v-for="(ii,ld) in item.list " :key="ld" :label="ii" :value='ii'></el-option>
          </el-select>
        </el-form-item>
        <p>学科成绩 <el-button @click="addItemInList" size="mini" style="margin-left:20px;">添加</el-button></p>
          <section class="list">
            <section class="list-item" v-for="(item,index) in form.list" :key="index">
                <section class="item" v-for="(list,lid) in item" :key="lid">
                  <el-input size="small" v-if="list.type == 'input'" :placeholder="'请编辑'+list.label" v-model="myForm.data[index][list.prop]" clearable :style="list.style"></el-input>
                  <el-switch v-if="list.type == 'switch'" v-model="myForm.data[index][list.prop]" :active-value="1" :inactive-value="0" active-text="是否挂科"></el-switch>
                </section>
            </section>
          </section>
      </el-form>
      <div slot="footer">
        <el-button @click="reset" type="" size="small">取消</el-button>
        <el-button @click="submit" type="primary" size="small">确定</el-button>
      </div>
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
      dialogVisible:false,
      form:{
        info:[
          {
            label:'姓名',
            value:'',
            type:'input',
            prop:'name',
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
            rules:[
              {
                required:true,
                message:'请选择学年季度',
                trigger:['blur','change']
              }
            ],
            list:['2018春季学期']
          },
          {
            label:'专业班级',
            value:'',
            type:'select',
            prop:'classes',
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
              style:'width:180px;',
            },
            {
              label:'成绩',
              value:'',
              type:'input',
              prop:'score',
              style:'width:120px;margin:0 15px;'
            },
            {
              label:'学分',
              value:'',
              type:'input',
              prop:'credit',
              style:'width:120px;margin-right:15px;'
            },
            {
              label:'是否挂科',
              value:1,
              prop:'isFail',
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
      }
    }
  },
  methods:{
    getRowDataWithDialog(e){
      let data = JSON.parse(JSON.stringify(e.data))
      this.dialogVisible = e.isShowDialog
      console.log(data)
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
          console.log('is error')
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
