import { resolve } from "url";

const state = {
  list:[],
  data:[],
  info:{},
  total:0
}

const mutations = {
  setReceiveList(state,status){
    state.list = status
  },
  setLetterHistory(state,status){
    state.data = status.data.list
    state.total = status.data.total
  },

  setLetterInfo(state,status){
    state.info = status.data && status.data
  },
}

const actions = {
  /**
   * 获取发送对象的名单列表
   * @param {*} param0 
   */
  getReceiveList({commit}){
    $http('SummaryManage/getAlternative.do').then(res=>{
      commit('setReceiveList',res.data)
    })
  },
  /**
   * 获取告家长书 -- 历史记录
   * @param {*} param0 
   * @param {*} status 
   */
  getLetterHistory({commit,rootState},status){
    $http('SummaryManage/getSummaryList.do',rootState.search).then(res=>{
      commit('setLetterHistory',res)
    })
  },
  /**
   * 获取放假通知列表
   * @param {*} param0 
   * @param {*} status 
   */
  getLeaveHistory({commit,rootState},status){
    $http('noticeManage/getNoticeList.do',rootState.search).then(res=>{
      commit('setLetterHistory',res)
    })
  },

  /**
   * 获取告家长书详情
   */
  getLetterInfo({commit,rootState},status){
    $http('SummaryManage/getSummaryInfo.do',status).then(res=>{
      return new Promise((resolve,reject)=>{
        commit('setLetterInfo',res)
        resolve()
      })
    })
  },
}

const getters = {
  /**
   * 过滤放假记录列表
   * 0 -- 放假通知
   * 1 -- 放假安排
   * @param {*} state 
   * @param {*} status 
   */
  formatLeaveList(state,status){
      state.data.map(item => {
        item.type = item.typeId == 0 ? '放假通知' : '放假安排'
      })
      return state.data
  },

  /**
   * 过滤数据成为树形
   * [
   *  {
   *  label:'2018',
   * children:[
   * {
   *  label:'软件',
   * children:[
   * {
   *  label:'02',
   * children:[
   * {
   *  name:'shadow',
   * number:'222222'
   * }]
   * }]
   *  }
   * ] 
   * }
   * ]
   * @param {*} state 
   */
  formatReciveList(state){
    var arr = []
    state.list.map(item => {
      var obj = {}
      for(var k in item){
        var obj1 = {}
        obj.label = k
        obj.children = []
        item[k].map(i => {
          for(var ii in i){
            var obj1 = {}
            obj1.label = ii
            obj1.children = []
              i[ii].map(list => {
                var obj2 = {}
                obj2.label = list.name
                obj2.number = list.number
                obj1.children.push(obj2)
              })
            obj.children.push(obj1)  
          }
        })
      }
      arr.push(obj)
    })
    return arr
  }
}

export default  {
  state,mutations,actions,getters
}