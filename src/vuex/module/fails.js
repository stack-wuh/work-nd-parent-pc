const state = {
  data:[],
  total:0
}

const mutations = {
  setFailsList(state,status){
    state.data = status.data.list
    state.total = status.data.total
  }
}

const actions = {
  getFailsList({commit},status){
    $http('ScoreManage/failScoreList.do',{
      type:status.type,
      classes:status.classes,
      keyWord:status.keyWord,
      failCount:status.failCount,
    }).then(res=>{
      commit('setFailsList',res)
    })
  }
}

const getters = {

}

export default {
  state,mutations,actions,getters
}