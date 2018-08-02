const state = {
  globalLoading:false,
  majorList:[],
  classesList:[],
  form:{},
  dialogVisible:false,
  search:{
    currPageNo:1,  // 页码
    classes:'',    // 班级名称
    keyWord:'',   // 关键字
    isRelevance:0,  // 是否关联
    type:'now',  // now -- 本学期挂科 , history -- 历史挂科
    failCount:'', // 挂科数
    // quarter:'2018春季学期',   // 学年季度
  }
}

export default state