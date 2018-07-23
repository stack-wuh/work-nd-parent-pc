import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/home'],resolve)
const Index = resolve => require(['@/components/index'],resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Home,
      redirect:'/index',
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/index',
          name:'index',
          component:Index,
        }
      ]
    }
  ]
})
