import { resolve } from "path";

const state = {
  data:[],
  total:0
}

const mutations = {
  setFailsList(state,status){
    state.data = status.data.list
    state.total = status.data.total
  },
  
  setFailsType(state,status){
    status.rootState.search = Object.assign(status.rootState.search,status.status)
    console.log(status)
  }
}

const actions = {
  /**
   * 获取挂科列表
   * @param {*} param0 
   */
  getFailsList({commit,rootState}){
    $http('ScoreManage/failScoreList.do',rootState.search).then(res=>{
      commit('setFailsList',res)
    })
  },

  /**
   * 切换本学期挂科/累计挂科
   */
  changeFailsType({commit,rootState},status){
    return new Promise((resolve,reject)=>{
      commit('setFailsType',{rootState,status})
      resolve()
    })
  }
}

const getters = {

}

export default {
  state,mutations,actions,getters
}