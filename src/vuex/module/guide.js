import { resolve } from "url";

const state = {
  data:[],
  total:0
}

const mutations = {
  setGuideList(state,status){
    state.data = status.data
  } 
}

const actions = {
  getGuideList({commit},status){
    $http('/recruitManage/getRecruit.do').then(res=>{
      return new Promise((resolve,reject)=>{
        commit('setGuideList',res)
        resolve()
      })
    })
  }
}

const getters = {

}

export default {
  state,mutations,actions,getters
}