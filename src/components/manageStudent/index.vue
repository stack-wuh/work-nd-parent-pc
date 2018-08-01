<template>
  <section class="father">
    <wrap-top>
      <span slot="left">学生信息</span>
      <span slot="right">学生: {{$store.state.student.total}}人</span>
    </wrap-top>
    <search type="student" :current="current" />
    <section class="content">
      <my-table @getRowDataWithDialog="getRowDataWithDialog" :info="$store.getters.formatStudentList" />
      <bottom :total="$store.state.student.total" />
    </section>
    <el-dialog title="更改关联信息"  :visible.sync="dialogVisiable">
      <el-form  label-width="120px" >
        <el-form-item label="联系电话" :rules="[{required:true,message:'请编辑联系电话',trigger:'blur'}]" >
          <el-input placeholder="请编辑联系电话"  v-model="form.phone" class="my-input-220"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button size="small" @click="reset" >取消</el-button>
        <el-button size="small" type="primary" @click="submit" >确定</el-button>
      </div>
    </el-dialog>
  </section>
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import Search from '@/components/common/search'
import MyTable from '@/components/common/myTable'
import Bottom from '@/components/common/bottom'
export default {
  components:{
    WrapTop,
    Search,
    MyTable,
    Bottom
  },
  data(){
    return{
      current:1,
      dialogVisiable:false,
      form:{
        userId:'',
        phone:'',
      }
    }
  },
  methods:{
    getRowDataWithDialog(e){
      let row = JSON.parse(JSON.stringify(e.data))
      this.dialogVisiable = e.isShowDialog
      this.form.userId = row.userId
      this.form.phone = row.userPhone
    },

    reset(){
      this.form = {}
      this.dialogVisiable = false
    },

    submit(){
      if(!this.form.userId && !this.form.phone){
        _g.toastMsg('error','请编辑必填项!')
        return
      }
      $http('studentManage/updateRelevance.do',this.form).then(res => {
        let error = res.status == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        if(res.status == 0){
          setTimeout(() => {
            this.reset()
            this.$store.dispatch('getStudentList')
          }, 1000);
        }
      })
    }
  },
  created(){
    this.$store.dispatch('getStudentList')
  }
}
</script>


<style lang="less" scoped>

</style>
