<template>
  <section class="father">
    <wrap-top>
      <span slot="left">发布招生简章</span>
    </wrap-top>
    <section class="content">
      <el-form :model="form" ref="myForm" :rules="rules" class="my-form" label-width="120px">
        <el-form-item label="标题" prop="title">
          <el-input placeholder="请编辑标题" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="详情">
          <article id="editor"></article>
        </el-form-item>
      </el-form>
      <section class="btm-list">
        <el-button size="small" >取消</el-button>
        <el-button size="small" type="primary" @click="submit">确定</el-button>
      </section>
    </section>
  </section>  
</template>


<script>
import WrapTop from '@/components/common/wraptop'
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

}

export default {
  components:{
    WrapTop
  },
  data(){
    return{
      form:{
        title:'',
        context:'',
        id:'',
      },
      rules:rules
    }
  },
  methods:{
    submit(){
      this.$refs.myForm.validate(valid => {
        var reg = /^<p><br><\/p>$/
        if(valid){
          if(this.editor.txt.html().match(reg)){
            _g.toastMsg('warning','请编辑详情后提交')
          }else{
            this.form.context = this.editor.txt.html()
            $http('recruitManage/addOrUpRecruit.do',this.form).then(res=>{
              let error = res.status == 0 ? 'success' : 'error'
              _g.toastMsg(error,res.msg)
              if(res.status == 0){
                setTimeout(()=>{
                  this.$router.push({path:'/guide/list/detail'})
                },100)
              }
            })
          }
        }
      })
    }
  },
  created(){
    this.$nextTick(()=>{
      this.$store.dispatch('getGuideList')
      this.editor = new Editor('#editor')
      this.editor.create()
      setTimeout(()=>{
         this.editor.txt.clear()
         this.form.title  = this.$store.state.guide.data[0].title
         this.form.id = this.$store.state.guide.data[0].id
         this.editor.txt.html(this.$store.state.guide.data[0].content)
      },100)
    })
  }
}
</script>


<style lang="less" scoped>
.father{
  .content{
    .btm-list{
      text-align: center;
    }
  }
}
</style>
