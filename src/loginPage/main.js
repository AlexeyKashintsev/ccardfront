import Vue from 'vue'
import App from './App'
import store from '../store'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-icons/iconfont/material-icons.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#05a4c0',
    accent: '#ce93d8',
    secondary: '#424242',
    info: '#0D47A1',
    warning: '#ffb300',
    error: '#B71C1C',
    success: '#2E7D32',
  },
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
