const getters = {
  formatClassesList(state){
    return state.classesList.map(item => {
      var obj = {
        name:item,
        isChecked:false
      }
      return obj
    })
  }
}

export default getters