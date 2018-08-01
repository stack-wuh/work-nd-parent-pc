<template>
  <section class="father">
    <my-table :info="$store.state.letter.data" />
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
      info:[
        {
          name:'给家长的一封信',
          time:'2018年7月24日 10:10'
        },
        {
          name:'给家长的一封信',
          time:'2018年7月24日 10:11'
        }
      ]
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
