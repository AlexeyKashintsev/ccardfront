import axios from '@/common/axios'

const user = {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    login(state) {
      return state.user ? state.user.login : ''
    },
    name(state) {
      return state.user ? state.user.name : ''
    },
    snils(state) {
      return state.user ? state.user.snils : ''
    },
    phone(state) {
      return state.user ? state.user.phone : ''
    },
    email(state) {
      return state.user ? state.user.email : ''
    },
  },
  mutations: {
    setUser(state, data) {
      state.user = data
    },
  },
  actions: {
    async getUser({ commit, }) {
      try {
        const response = await axios.get('user_data')
        commit('setUser', response.data)
      } catch (error) {
        throw new Error(error)
      }
    },
    async setUser({ commit, dispath, }, payload) {
      try {
        const response = await axios.post('user_data', payload)
        
        await dispatch('user/getUser')
      } catch (error) {
        throw new Error(error)
      }
    },
    async logout({ commit, }) {
      try {
        await axios.get('?__type=18')
        document.location = '/lk'
      } catch (error) {

      }
    },
  },
}

export default user