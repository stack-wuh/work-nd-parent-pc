const logPlugins = store => {
  store.subscribe((mutation,state)=>{
    console.log(mutation)
  })
}

export default logPlugins
