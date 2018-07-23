import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/home'],resolve)
const Index = resolve => require(['@/components/index'],resolve)
const CheckIndex = resolve => require(['@/components/manageCheck/index'],resolve)
const GradeIndex = resolve => require(['@/components/manageGrade/index'],resolve)
const FailsIndex = resolve => require(['@/components/manageFails/index'],resolve)
const LetterIndex = resolve => require(['@/components/manageLetter/index'],resolve)
const LettetPublish = resolve => require(['@/components/manageLetter/child/publish'],resolve)

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
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/check',
          name:'check',
          component:CheckIndex
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/grade',
          name:'grade',
          component:GradeIndex
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/fails',
          name:'fails',
          component:FailsIndex
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/letter',
          name:'letter',
          component:LetterIndex,
          redirect:'/letter/publish',
          children:[
            {
              path:'/letter/publish',
              name:'lettetPublish',
              component:LettetPublish
            }
          ]
        }
      ]
    },
  ]
})
