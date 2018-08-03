const state = {
  data:[],
  info:[],
  total:0,
  currentPage:1,
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
    state.data = (status.data && status.data.list) || []
    state.total = (state.data && status.data.total ) || 0
    state.currentPage = (state.data && status.data.pageNum) || 1
  },
  setChangeStudentCheckRate(state,status){
    status.rootState.search = Object.assign(status.rootState.search,status.status)
  },
  /**
   * 设置学生考勤详情
   */
  setStudentCheckInfo(state,status){
    state.info = status.data.list
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
  changeStudentCheckRate({commit,rootState},status){
    return new Promise((resolve,reject)=>{
      commit('setChangeStudentCheckRate',{rootState,status})
      resolve()
    })
  },
  /**
   * 获取学生考勤详情
   */
  getStudentCheckInfo({commit,rootState},status){
    $http('attendanceManage/getAttendanceInfo.do',status).then(res=>{
      commit('setStudentCheckInfo',res)
    })
  }
}

const getters = {
  formatCheckList(state){
    state.data.map(item => {
      item.check_type = item.type == 2 ? '晚点名' : 
                          item.type == 3 ? '宿舍' :
                            item.type == 4 ? '会议讲座' : '上课' 
    })
    return state.data
  }
}

export default {
  state,mutations,actions,getters
}