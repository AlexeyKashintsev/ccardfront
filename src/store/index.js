import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import benefits from './benefits'
import history from './history'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    benefits,
    history,
  },
})