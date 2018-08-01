import { resolve } from "path";

const state = {
  data:[],
  total:0,
  search:{
    currPageNo:1,
    classes:'',
    keyWord:'',
    isRelevance:0
  }
}

const mutations = {
  /**
   * 保存data
   * @param {*} state 
   * @param {*} status 
   */
  setStudentList(state,status){
    state.data = status.data.list
    state.total = status.data.total
  },
}


const actions = {
  /**
   * 获取学生信息列表
   * @param {*} param 
   */
  getStudentList({commit,state,rootState}){
    $http('studentManage/getStudentList.do',rootState.search).then(res=>{
      commit('setStudentList',res)
    })
  },

  /**
   * 取消与家长的关联
   */
  delStudentConcat({commit,state,rootState},status){
    return new Promise((resolve,reject)=>{
      $http('studentManage/dissociated.do',status).then(res=>{
        let error = res.status == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        resolve()
      })
    })
  }
}

const getters = {
  formatStudentList:state => {
    state.data.map(item => {
      item.isRelevance = item.isRelevance == 0 ? '是' : '否'
    })
    return state.data
  }
}

export default {
  state,mutations,actions,getters
}