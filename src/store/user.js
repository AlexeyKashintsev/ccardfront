import axios from '@/common/axios'

const user = {
  namespaced: true,
  state: {
    user: null,
    card: null,
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
    setCard(state, data) {
      state.card = data
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
    async getCard({ commit, }) {
      try {
        const response = await axios.get('cards')
        commit('setCard', response.data)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}

export default user