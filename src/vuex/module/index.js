const state = {
  data:[],
  total:0,
}

const actions = {

}

const mutations = {
  setIndexData(state,status){
    state.data = status.data.list
    state.total = status.data.total
  },

  /**
   * 获取放假通知列表
   */
  getLeaveNoticeList({commit},status){
    $http('holidayNotice/getNoticeList.do',{
      
    })
  }
}

const getters = {

}

export default {
  state,actions,mutations,getters
}