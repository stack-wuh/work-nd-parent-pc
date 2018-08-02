<template>
  <section class="father">
    <my-table :info="RootName == 'letter' ? $store.state.letter.data : $store.getters.formatLeaveList" />
  </section> 
</template>


<script>
import MyTable from '@/components/common/myTable'
export default {
  components:{
    MyTable
  },
  computed:{
    RootName(){
      return this.$route.name
    }
  },
  data(){
    return{
      info:[]
    }
  },
  created(){
    if(this.RootName == 'leave'){
      this.$store.dispatch('getLeaveHistory')
    }else if(this.RootName == 'letter'){
      this.$store.dispatch('getLetterHistory')
    }

  }
}
</script>


<style lang="less" scoped>

</style>
