const state = {
  data:[],
  total:0,
  info:{},
  currentPage:1
}

const actions = {
  /**
   * 获取待回复消息
   */
  getWillBackNotice({commit,rootState}){
    $http('opinionManage/opinionList.do',rootState.search).then(res=> {
      commit('setWillBackNotice',res)
    })
  },
  /**
   * 获取历史消息
   */
  getHistoryNotice({commit,rootState}){
    $http('opinionManage/getReplyList.do',rootState.search).then(res => {
      commit('setWillBackNotice',res)
    })
  },

  /**
   * 获取假期详情
   */
  getInfoDetail({commit},status){
    $http('holidayNotice/getNoticeInfo.do',status).then(res=>{
      return new Promise((resolve,reject)=>{
        commit('setInfoDetail',res)
         resolve()
      })
    })
  },
  /**
   * 获取消息详情
   */
  getNoticeInfo({commit},status){
    $http('opinionManage/getFeedInfo.do',status).then(res=>{
      return new Promise((resolve,reject)=>{
        commit('setInfoDetail',res)
        resolve()
      })
    })
  }
}

const mutations = {
  setIndexData(state,status){
    state.data = (status.data) && status.data.list
    state.total = (status.data) && status.data.total
    state.currentPage = (status.data) && status.data.pageNum
  },

  /**
   * 设置详情内容
   */
  setInfoDetail(state,status){
    state.info = status.data
  },
  /**
   * 待回复消息
   */
  setWillBackNotice(state,status){
    state.data = status.data.list
    state.total = status.data.total
  }


}

const getters = {

}

export default {
  state,actions,mutations,getters
}