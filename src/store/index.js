import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'



import users from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users
  },
  getters
})

export default store
