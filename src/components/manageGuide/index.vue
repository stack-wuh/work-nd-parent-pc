<template>
  <section class="father">
    <wrap-top>
      <span slot="left">招生简章</span>
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
            console.log('请输入内容')
          }else{
            console.log(this.editor.txt.html())
          }
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
  .content{
    .btm-list{
      text-align: center;
    }
  }
}
</style>
