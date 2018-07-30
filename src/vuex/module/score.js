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
  getStudentScore({commit},state){
    $http('ScoreManage/getScoreList.do',{
      currPageNo:1,
      classes:state.classes,
      keyWord:state.keyWord,
      quarter:'2018年春季学期'
    }).then(res=>{
      commit('setStudentScore',res)
    })
  }
}

const getters = {

}

export default {
  state,mutations,actions,getters
}