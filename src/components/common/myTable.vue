<template>
  <section class="wrapper">
    <section class="wrap">
      <el-table border stripe :data="info">
        <el-table-column align="center" v-for="(item,index) in dataList" :key="index" :label="item.key" :prop="item.prop"></el-table-column>
      </el-table>
    </section>
  </section>
</template>


<script>
export default {
  props:['info'],
  data(){
    return{
      data:[
        {
          name:'index',
          data:[
            {
              key:'工号',
              prop:'number'
            },
            {
              key:'姓名',
              prop:'name'
            },
            {
              key:'职务',
              prop:'post',
            },
            {
              key:'管辖班级',
              prop:'klasses',
            },
            {
              key:'联系电话',
              prop:'phone',
            },
            {
              key:'QQ',
              prop:'qq'
            },
            {
              key:'微信',
              prop:'weixin'
            },
            {
              key:'邮箱',
              prop:'email'
            },
            {
              key:'办公地址',
              prop:'location'
            }
          ]
        }
      ],
    }
  },
  computed:{
    NAME(){
      return this.$route.name
    },
    dataList(){
      return this.data.find(item => item.name == this.NAME).data
    }
  },
  created(){
    console.log(this.NAME)
  }
}
</script>


<style lang="less" scoped>

</style>
