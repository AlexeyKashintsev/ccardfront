import axios from '@/common/axios'

const benefits = {
  namespaced: true,
  state: {
    benefits,
  },
  mutations: {
    setBenefits(state, data) {
      state.benefits = data
    },
  },
  actions: {
    async getBenefits({ commit, }) {
      try {
        const response = await axios.get('user_benefits')
        commit('setBenefits', response.data)
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}

export default benefits