import axios from '@/common/axios'

const history = {
  namespaced: true,
  state: {
    history: null,
  },
  mutations: {
    setHistory(state, data) {
      state.history = data
    },
  },
  actions: {
    async getHistory({ commit, }, post) {
      try {
        const response = await axios.get('user_history', { params: post, })
        respose = 
        commit('setHistory', response.data)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}

export default history