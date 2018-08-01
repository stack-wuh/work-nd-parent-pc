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
  }
}

export default state