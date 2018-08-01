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
  },

  /**
   * 设置search组件的 search条件
   */
  setSearchDataChange(state,status){
    state.search = Object.assign(state.search,status)
  }
}

export default mutations