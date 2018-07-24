<template>
  <section class="father">
    <wrap-top>
      <span slot="left">期末总结</span>
    </wrap-top>
    <p>
      <img src="../../../static/img/icon-message.png" alt="icon-message">
      <span>期末总结包含期末开始成绩、本学期等级证书获得情况、个人在校履历、奖惩记录、告家长书,编辑好之后通过此处发送,家长端统一接收.</span>
    </p>
    <section class="content">
      <section class="card">
        <section @click="jump2other(item.path)" :class="['card-item',item.path?'card-hover':'']" v-for="(item,index) in card" :key="index">
          <div class="first">
            <h3>{{item.title}}</h3>
            <span>{{item.subTitle}}</span>
          </div>
          <div class="second">
            <el-progress :percentage="item.rate" :color="item.color" :show-text="false"></el-progress>
          </div>
          <div class="third">
            <span>已上传人数:{{item.success}}人</span>
            <span>总管辖人数:{{item.fail}}人</span>
          </div>
        </section>
      </section>
    </section>
    <section class="bottom">
      <p>发送前请确保期末考试成绩,告家长书的已上传人数等于中管辖人数!</p>
      <section class="btm-list">
        <el-button size="small">取消</el-button>
        <el-button size="small" type="primary">发送</el-button>
      </section>
    </section>
  </section>
</template>

<script>
import WrapTop from '@/components/common/wraptop'
export default {
  components:{
    WrapTop,
  },
  data(){
    return{
      card:[
        {
          title:'NO.1期末考试成绩',
          subTitle:'',
          rate:50,
          success:10,
          fail:10,
          color:'#9D79FF',
          path:'grade'
        },
        {
          title:'NO.2等级证书',
          subTitle:'(此部分内容由学生通过学生端上传,教师在家时段审核后展示)',
          rate:60,
          success:10,
          fail:10,
          color:'#990000',
        },
        {
          title:'NO.3个人履历',
          subTitle:'(此部分内容由学生通过学生端上传,教师在家时段审核后展示)',
          rate:40,
          success:10,
          fail:10,
          color:'#A4DB74',
        },
        {
          title:'NO.4告家长书',
          subTitle:'',
          rate:10,
          success:10,
          fail:10,
          color:'#FF9900',
          path:'letter'
        },
      ]
    }
  },
  methods:{
    jump2other(path){
      this.$router.push({name:path})
    }
  }
}
</script>


<style lang="less" scoped>
.father{
  p{
    display: flex;
    align-items: center;
    background-color: #F2F2F2;
    font-size: 15px;
    img[alt="icon-message"]{
      width:40px;
      height:40px;
      margin-left:15px;
      margin-right:15px;
    }
  }
  .content{
    .card{
      display:flex;
      align-items: center;
      justify-content: space-around;
      flex-flow: row wrap;
      margin:15px 0;
      margin-bottom: 0;
      .card-item{
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
        justify-content: center;
        width:40%;
        min-width:400px;
        height:200px;
        padding:20px;
        margin-bottom:15px;
        border:1px solid #eee;
        box-sizing: border-box;
        .first{
          height:40px;
          h3{
            font-size: 16px;
          }
          h3 + span{
            font-size: 13px;
          }
        }
        .second{
          margin:15px 0;
          height:15px;
          width:90%;
        }
        .third{
          display: flex;
          align-items:center;
          justify-content: space-between;
          width:90%;
          font-size: 14px;
        }
      }
      .card-hover:hover{
        cursor: pointer;
        transform: scale3d(1.1,1.1,1.1) translateX(20px);
        transition: all .5s linear;
      }
    }
  }
  .bottom{
    p{
      margin-bottom:40px;
      background-color: #fff;
      color: #999;
    }
    .btm-list{
      text-align:center;
    }
  }
}
</style>
