import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'

Vue.use(Buefy)

import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
    events: ''
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
