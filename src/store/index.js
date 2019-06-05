import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getter'
import * as state from './state'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vue.Store({
  actions,
  getters,
  state,
  mutations
})