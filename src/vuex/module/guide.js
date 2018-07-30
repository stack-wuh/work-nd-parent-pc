const state = {
  data:[],
  total:0
}

const mutations = {
  setGuideList(state,status){
    state.data = status.data.list
    state.total = status.data.total
  } 
}

const actions = {
  getGuideList({commit},status){
    $http('/recruitManage/getRecruit.do').then(res=>{
      commit('setGuideList',res)
    })
  }
}

const getters = {

}

export default {
  state,mutations,actions,getters
}