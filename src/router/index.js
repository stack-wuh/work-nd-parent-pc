import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/components/home'],resolve)
const Index = resolve => require(['@/components/index'],resolve)
const LeaveIndex = resolve => require(['@/components/manageIndex/leave'],resolve)
const SummaryIndex = resolve => require(['@/components/manageIndex/summary'],resolve)
const MessageIndex = resolve => require(['@/components/manageIndex/message'],resolve)
const CheckIndex = resolve => require(['@/components/manageCheck/index'],resolve)
const GradeIndex = resolve => require(['@/components/manageGrade/index'],resolve)
const FailsIndex = resolve => require(['@/components/manageFails/index'],resolve)
const LetterIndex = resolve => require(['@/components/manageLetter/index'],resolve)
const LetterDetail = resolve => require(['@/components/manageLetter/child/detail'],resolve)
const GuideIndex = resolve => require(['@/components/manageGuide/index'],resolve)
const GuideList = resolve => require(['@/components/manageGuide/list'],resolve)
const SettingIndex = resolve => require(['@/components/manageSetting/index'],resolve)
const StudentIndex = resolve => require(['@/components/manageStudent/index'],resolve)

const LoginIndex = resolve => require(['@/components/loginManage/login'],resolve)

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
      path:'/login',
      name:'login',
      component:LoginIndex,
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
        },
        {
          path:'/index/leave',
          name:'leave',
          component:LeaveIndex
        },
        {
          path:'/index/summary',
          name:'summary',
          component:SummaryIndex
        },
        {
          path:'/index/message',
          name:'message',
          component:MessageIndex
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
        },
        {
          path:'/letter/detail',
          name:'letterDetail',
          component:LetterDetail
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/guide',
          name:'guide',
          component:GuideIndex,
        },
        {
          path:'/guide/list',
          name:'guideList',
          component:GuideList
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/setting',
          name:'setting',
          component:SettingIndex,
        }
      ]
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children:[
        {
          path:'/student',
          name:'student',
          component:StudentIndex
        }
      ]
    }
  ]
})
