<template>
  <section class="father">
    <article id="editor"></article>
    <section class="tips">
      <div>
        <span>发送至</span>
        <el-input @focus="chooseSend"  placeholder="请选择要发送的对象" style="width:280px;"></el-input>
      </div>
      <div>
        编辑好内容点击保存存储至系统,可进入期末总结页面查看编辑经度并统一发送
      </div>
    </section>
    <section class="bottom">
      <el-button size="small">取消</el-button>
      <el-button size="small" type="primary" @click="submit">保存</el-button>
    </section>
    <el-dialog title="选择发送对象" :visible.sync="dialogVisible">

    </el-dialog>
  </section>
</template>

<script>
import Editor from 'wangeditor'
const editor  = null
export default {
  data(){
    return {
      dialogVisible:false,
      disabled:false
    }
  },
  methods:{
    chooseSend(){
      this.dialogVisible = true
    },
    submit(){
   
    }
  },
  created(){
    this.$nextTick(()=>{
      this.editor = new Editor('#editor')
      this.editor.create()
    })
    this.$store.dispatch('getReceiveList')
  }
}
</script>


<style lang="less" scoped>
.father{
  .tips{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:20px;
    margin-bottom:20px;
    div:first-of-type{
      align-self:flex-end;
      color: #666;
      font-size: 15px;
      span{
        margin-right:15px;
      }
    }
    div:last-child{
      align-self:flex-start;
      color: #999;
      font-size: 14px;
    }
  }
  .bottom{
    text-align:center;
  }
}
</style>
