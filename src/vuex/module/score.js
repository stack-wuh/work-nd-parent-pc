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
  getStudentScore({commit,rootState},status){
    $http('ScoreManage/getScoreList.do',Object.assign(rootState.search,status)).then(res=>{
      commit('setStudentScore',res)
    })
  }
}

const getters = {
  quarterList(){
    let date = new Date()
    let year = date.getFullYear()
    let arr = []
    for(var i = year-10 ; i<=year ;i++){
      arr.push(i+'年春季学期',i+'年秋季学期')
    }
    return arr
  }
}

export default {
  state,mutations,actions,getters
}