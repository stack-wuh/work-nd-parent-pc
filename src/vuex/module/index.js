import { resolve } from "url";

const state = {
  data:[],
  total:0,
  info:{}
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
   * 获取详情
   */
  getInfoDetail({commit},status){
    $http('holidayNotice/getNoticeInfo.do',status).then(res=>{
      return new Promise((resolve,reject)=>{
        commit('setInfoDetail',res)
         resolve()
      })
    })
  }
}

const mutations = {
  setIndexData(state,status){
    state.data = status.data.list
    state.total = status.data.total
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