const state = {
  list:[],
  data:[],
  total:0
}

const mutations = {
  setReceiveList(state,status){
    state.list = status
  },
  setLetterHistory(state,status){
    state.data = status.data.list
    state.total = status.data.total
  }
}

const actions = {
  getReceiveList({commit}){
    $http('SummaryManage/getAlternative.do').then(res=>{
      commit('setReceiveList',res.data)
    })
  },
  getLetterHistory({commit},status){
    $http('SummaryManage/getSummaryList.do',{currPageNo:status.currPageNo}).then(res=>{
      commit('setLetterHistory',res)
    })
  }
}

const getters = {

}

export default  {
  state,mutations,actions,getters
}