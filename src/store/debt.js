import axios from '@/common/axios'

const debt = {
  namespaced: true,
  state: {
    debt: null,
  },
  mutations: {
    setDebt(state, data) {
      state.debt = data
    },
  },
  actions: {
    async getDebt({ commit, }) {
      try {
        const response = await axios.get('debt')
        commit('setDebt', response.data)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}

export default debt