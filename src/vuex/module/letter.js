const state = {
  list:[],
  data:[],
  total:0
}

const mutations = {
  setReceiveList(state,status){
    state.list = status
  },
  setLetterHistory(state,status){
    state.data = status.data.list
    state.total = status.data.total
  }
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
  getLetterHistory({commit},status){
    $http('SummaryManage/getSummaryList.do',{currPageNo:status.currPageNo}).then(res=>{
      commit('setLetterHistory',res)
    })
  },

}

const getters = {
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