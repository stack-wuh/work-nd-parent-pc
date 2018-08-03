const state = {
  data:[],
  total:0,
  currentPage:1,
}

const mutations = {
  setStudentScore(state,status){
    state.data = (status.data) && status.data.list
    state.total = (status.data) && status.data.total
    state.currentPage = (status.data) && status.data.pageNum
  }
}

const actions = {
  /**
   * 获取学生成绩管理列表
   * @param {} param0 
   * @param {*} status 
   */
  getStudentScore({commit,rootState},status){
    $http('ScoreManage/getScoreList.do',Object.assign(rootState.search,status)).then(res=>{
      commit('setStudentScore',res)
    }).catch(err=> {
      _g.toastMsg('error',err)
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