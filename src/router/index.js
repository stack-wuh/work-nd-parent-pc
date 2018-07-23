import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/home'],resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    }
  ]
})
