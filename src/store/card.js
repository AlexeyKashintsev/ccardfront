import axios from '@/common/axios'

const card = {
  namespaced: true,
  state: {
    card: null
  },
  mutations: {
    setCard(state, data) {
      state.card = data
    }
  },
  actions: {
    async getCard({ commit }) {
      try {
        const response = await axios.get('cards')
        commit('setCard', response.data)
      } catch (error) {
        throw new Error(error)
      }
    },
    async addCard({ commit }, payload) {
      try {
        const response = await axios.post('cards', payload)
      } catch (error) {
        throw new Error(error)
      }
    },
    async deleteCard({ commit }, payload) {
      try {
        const response = await axios.delete('cards', payload)
      } catch (error) {
        throw new Error(error)
      }
    },
    async setMainCard({ commit }, payload) {
      try {
        const response = await axios.put('cards', payload)
      } catch (error) {
        throw new Error(error)
      }
    },
    async pay({ commit, store }, payload) {
      try {
        const response = await axios.post('pay', { card: payload })
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}

export default card