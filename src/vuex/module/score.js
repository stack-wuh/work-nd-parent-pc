const state = {
  data:[],
  total:'',
}

const mutations = {
  setStudentScore(state,status){
    state.data = status.data.list
    state.total = status.data.total
  }
}

const actions = {
  getStudentScore({commit,rootState},state){
    $http('ScoreManage/getScoreList.do',rootState.search).then(res=>{
      commit('setStudentScore',res)
    })
  }
}

const getters = {

}

export default {
  state,mutations,actions,getters
}