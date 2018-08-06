// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {Button,Select,Option,Input,Table,TableColumn, Tree , Pagination,Form,FormItem,Progress,Message,Loading,Dialog,CheckboxGroup,
  Checkbox,MessageBox,Switch,Upload} from 'element-ui'
import '../static/default-theme/index.css'
import '../static/css/base.less'
import '../static/css/font/iconfont.css'
import apiMethods from '../static/js/http'
import _g from '../static/js/global'
import axios from 'axios'
import store from './vuex/store'

Vue.prototype.$ELEMENT = {size:'primary',zIndex:3000}
Vue.prototype.$store = store
Vue.prototype.$message = Message
Vue.prototype.$http = apiMethods
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

window.axios = axios
window._g = _g
window.$bus = new Vue()
window.$store = store
window.$http = apiMethods

//开发地址
window.rootPath = '/parents_guide/'


/**
 * 路由守卫
 * 验证用户登录
 */
router.beforeEach((to,from,next)=>{ 
  if(to.name !== 'login'){
    $http('manageUser/checkLogin.do').then(res=>{
      if(res.status == 10){
        router.push({name:'login'})
      }
    })
    next()
  }else{
    next()
  }
})

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Progress)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Tree)
Vue.use(Switch)
Vue.use(Upload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
