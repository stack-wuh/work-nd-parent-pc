// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {Button} from 'element-ui'
import '../static/default-theme/index.css'
import '../static/css/base.less'
import '../static/css/font/iconfont.css'

Vue.prototype.$ELEMENT = {size:'mini',zIndex:3000}

Vue.use(Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
