const state = {
  data:[],
  total:0,
  currentPage:1,
}

const mutations = {
  setSettingsAvatars(state,status){
    state.data = (status.data) && status.data.list
    state.total = (status.data) && status.data.total
    state.currentPage = (status.data) && status.data.pageNum
  }
}

const actions = {
  /**
   * 系统设置 -- 获取角色
   */
  getSettingsAvatars({commit,rootState},status){
    $http('teacherManage/teacherRoleList.do',rootState.search).then(res=>{
      commit('setSettingsAvatars',res)
    })
  },

  /**
   * 系统设置 -- 删除角色
   */
  delSettingAvatars({commit},status){
    return new Promise((resolve,reject)=>{
      $http('teacherManage/delTeacherRole.do',{id:status.id}).then(res => {
        let error = res.status == 0 ? 'success' : 'error'
        _g.toastMsg(error,res.msg)
        resolve()
      })
    })
  },
  /**
   * 系统设置 -- 添加角色
   */
  
}

const getters = {
  formatSettingList: state => {
    state.data.map(item => {
      item.position = (item.position && item.position == 0) ? '班主任' : '辅导员'
    })
    return state.data
  }
}

export default {
  state,mutations,actions,getters
}