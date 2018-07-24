<template>
  <section class="father">
    <el-form :modal="form" ref="myForm" :rules="rules" label-width="120px">
      <el-form-item label="标题" prop="title">
        <el-input placeholder="请编辑标题" v-model="form.title" style="width:220px;"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="classify">
        <el-select v-model="form.classify" placeholder="请选择分类">
          <el-option label="放假通知" value="1"></el-option>
          <el-option label="假期安排" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="正文">
        <article id="editor"></article>
      </el-form-item>
    </el-form>
    <section class="btm-list">
      <el-button size="small">取消</el-button>
      <el-button size="small" type="primary">确定</el-button>
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
  classify:[
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
        classify:'',
        content:''
      },
      rules:rules,
    }
  },
  methods:{},
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
