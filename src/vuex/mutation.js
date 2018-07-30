const mutations = {
  showLoading(state,status){
    state.globalLoading = status
  },

  /**
   * 获取全部专业
   */
  setMajorList(state,status){
    state.majorList = status
  },
  /**
   * 根据专业获取班级
   */
  setClassesByMajor(state,status){
    state.classesList = status
  }
}

export default mutations