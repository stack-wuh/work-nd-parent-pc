import Vue from 'vue'
import Vuex,{Store} from 'vuex'

import state from './state'
import mutations from './mutation'
import actions from './actions'
import getters from './getter'
import indexModule from '../vuex/module/index'
import studentModule from '../vuex/module/student'
import gradeModule from '../vuex/module/score'
import failsModule from '../vuex/module/fails'
import letterModule from '../vuex/module/letter'
import settingModule from '../vuex/module/setting'
import guideModule from '../vuex/module/guide'
import CheckModule from '../vuex/module/check'


import logPlugins from '../vuex/plugins/log'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    index:indexModule,
    student:studentModule,
    grade:gradeModule,
    fails:failsModule,
    letter:letterModule,
    setting:settingModule,
    guide:guideModule,
    check:CheckModule,
  },
  plugins:[logPlugins]
})