import axois from 'axios'

const actions ={
  showLoading({commit},status){
    commit('showLoading',status)
  },

  /**
   * 获取教职工信息
   */
  indexDataFetch({commit},status){
    $http('teacherManage/getTeacherList.do',{currPageNo:1}).then(res=>{
      commit('setIndexData',res)
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


}

export default actions