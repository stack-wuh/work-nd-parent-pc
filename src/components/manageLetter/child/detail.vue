<template>
  <section class="father">
    <section class="context">
      <p>this is title</p>
      <time>2018年7月23日</time>
      <article class="article" v-html="content">
      </article>
    </section>
  </section>  
</template>


<script>
export default {
  data(){
    return{
      content:`<p>this is context,<img src="https://tse1.mm.bing.net/th?id=OIP.esMc3btFNXMBPMOATyJhFAHaJ4&o=5&pid=1.7" /></p>`
    }
  }
}
</script>


<style lang="less" scoped>
.context{
  margin-bottom:20px;
  p{
    font-size: 20px;
    text-align: center;
  }
  time{
    display: block;
    color: #999;
    font-size: 14px;
    text-align: center;
  }
  article{
    padding:15px;
    box-sizing: border-box;
    border:1px solid red;
  }
}
</style>
<style scoped>
  .article >>> img{
    width:100%;
    height:100%;
  }
</style>
