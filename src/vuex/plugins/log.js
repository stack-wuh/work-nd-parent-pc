const logPlugins = store => {
  store.subscribe((mutation,state)=>{
    console.log(mutation,'this is log-plugins - mutation')
    console.log(state,'this is log plugins - state')
  })
}

export default logPlugins
