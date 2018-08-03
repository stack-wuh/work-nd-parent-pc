import { resolve } from "path";

const state = {
  data:[],
  total:0,
  currentPage:1
}

const mutations = {
  setFailsList(state,status){
    state.data = (status.data) && status.data.list
    state.total = (status.data) && status.data.total
    state.currentPage = (status.data) && status.data.pageNum
  },
  
  setFailsType(state,status){
    status.rootState.search = Object.assign(status.rootState.search,status.status)
  }
}

const actions = {
  /**
   * 获取挂科列表
   * @param {*} param0 
   */
  getFailsList({commit,rootState},status){
    $http('ScoreManage/failScoreList.do',Object.assign(rootState.search,status)).then(res=>{
      commit('setFailsList',res)
    }).catch(err=>{
      _g.toastMsg('error',err)
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
  },

  /**
   * 通知家长
   */
  handleSendNotice({commit},status){
    if(!status.numbers){
      _g.toastMsg('error','请先勾选发送对象')
      return
    }
    if(!status.content){
      _g.toastMsg('error','请编辑发送内容')
      return
    }
    $http('ScoreManage/addFailNotice.do',status).then(res=>{
      return new Promise((resolve,reject)=>{
        if(res.status == 0){
          let error = res.status == 0 ? 'success' : 'error'
          _g.toastMsg(error,res.data)
          resolve()
        }else{
          reject()
        }
      })
    }).catch(err=>{
      _g.toastMsg('error',err)
    })
  }
}

const getters = {

}

export default {
  state,mutations,actions,getters
}