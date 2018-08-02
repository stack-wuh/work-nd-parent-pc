const state = {
  data:[],
  total:0,
  search:{
    type:'' ,  // 2：晚点名 ， 3: 宿舍 , 4 : 会议讲座  ， 5： 上课
    quarter:'' , //季度,
    currPageNo:1 , //页数
  }
}

const mutations = {
  /**
   * 设置学生考勤信息
   */
  setStudentCheckList(state,status){
    // state.data = status.data.list
    // state.total = status.data.total
  }
}

const actions = {
  /**
   * 获取学生考勤列表
   */
  getStudentCheckList({commit,rootState},status){
    $http('attendanceManage/getAttendance.do',Object.assign(rootState.search,status)).then(res=> {
      return new Promise((resolve,reject)=>{
        commit('setStudentCheckList',res)
        resolve()
      })
    })
  },
  /**
   * 切换分类搜索
   */

}

const getters = {

}

export default {
  state,mutations,actions,getters
}