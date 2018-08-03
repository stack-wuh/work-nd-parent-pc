import axois from 'axios'
import { resolve } from 'url';

const actions ={
  showLoading({commit},status){
    commit('showLoading',status)
  },

  /**
   * 获取教职工信息
   */
  indexDataFetch({commit,state},status){
    $http('teacherManage/getTeacherList.do',state.search).then(res=>{
        commit('setIndexData',res)
    }).catch(err=>{
      _g.toastMsg('error',res.msg)
    })
  },

  /**
   * 获取全部专业
   */
  getMajorList({commit},status){
    $http('student/getMajorList.do').then(res => {
      commit('setMajorList',res.data)
    })
  },

  /**
   * 获取专业内的班级
   */
  getClassesByMajor({commit},status){
    $http('student/getClassList.do',{major:status.major}).then(res => {
      commit('setClassesByMajor',res.data)
    })
  },

  /**
   * search组件 search条件
   */
  getSearchDataChange({commit,state},status){
    return new Promise((resolve,reject)=>{
      commit('setSearchDataChange',status)
      resolve()
    })
  }
}

export default actions