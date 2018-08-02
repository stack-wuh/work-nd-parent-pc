<template>
  <section class="father">
    <wrap-top>
      <span slot="left">招生简章</span>
    </wrap-top>
    <section class="content">
      <my-table :info="$store.state.guide.data" />
    </section>
  </section>  
</template>


<script>
import WrapTop from '@/components/common/wraptop'
import MyTable from '@/components/common/myTable'
import Bottom from '@/components/common/bottom'
export default {
  components:{
    WrapTop,
    MyTable,
    Bottom
  },
  data(){
    return{

    }
  },
  methods:{

  },
  created(){
    this.$store.dispatch('getGuideList')
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
