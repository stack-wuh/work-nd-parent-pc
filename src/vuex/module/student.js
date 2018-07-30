const state = {
  data:[],
  total:0
}

const mutations = {
  setStudentList(state,status){
    state.data = status.data.list
    state.total = status.data.total
  }
}


const actions = {
  getStudentList({commit},state){
    $http('studentManage/getStudentList.do',{
      currPageNo:state.currPageNo,
      classes:state.classes,
      keyWord:state.keyWord,
      isRelevance:state.isRelevance
    }).then(res => {
      commit('setStudentList',res)
    })
  }
}

const getters = {
  formatStudentList:state => {
    state.data.map(item => {
      item.isRelevance = item.isRelevance == 1 ? '是' : '否'
    })
    return state.data
  }
}

export default {
  state,mutations,actions,getters
}