<template>
  <section class="father">
    <el-form :model="form" ref="myForm" :rules="rules" label-width="120px">
      <el-form-item label="标题" prop="title">
        <el-input placeholder="请编辑标题" v-model="form.title" style="width:220px;"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="typeId">
        <el-select v-model="form.typeId" placeholder="请选择分类">
          <el-option label="放假通知" value="0"></el-option>
          <el-option label="假期安排" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="正文">
        <article id="editor"></article>
      </el-form-item>
    </el-form>
    <section class="btm-list">
      <el-button size="small">取消</el-button>
      <el-button size="small" @click="submit" type="primary">确定</el-button>
    </section>
  </section>
</template>


<script>
import Editor from 'wangeditor'
const editor = null
const rules = {
  title:[
    {
      required:true,
      message:'请编辑标题',
      trigger:'blur'
    }
  ],
  typeId:[
    {
      required:true,
      message:'请选择类型',
      trigger:['blur','change']
    }
  ]
}
export default {
  data(){
    return{
      form:{
        title:'',
        typeId:'',
        content:''
      },
      rules:rules,
    }
  },
  methods:{
    submit(){
      this.$refs.myForm.validate(valid=>{
        if(valid){
          let reg = new RegExp('/^<p><br></p>$/');
          if(reg.test(this.editor.txt.html())){
            return
          }else{
            this.form.content = this.editor.txt.html()
            this.$http('noticeManage/addHolidayNotice.do',this.form).then(res=>{
              let error = res.status == 0 ? 'success' : 'error'
              _g.toastMsg(error,res.msg)
            })
          }
        }else{
          _g.toastMsg('warning','请编辑必填项!')
        }
      })
    }
  },
  created(){
    this.$nextTick(()=>{
      this.editor = new Editor('#editor')
      this.editor.create()
    })
  }
}
</script>


<style lang="less" scoped>
.father{
  .btm-list{
    text-align: center;
  }
}
</style>
