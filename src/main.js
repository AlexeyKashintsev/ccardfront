import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from './common/axios'
import VueProgressBar from 'vue-progressbar'
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

Vue.use(VueProgressBar, {
  color: '#ADE027',
  failedColor: '#F43D41',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
})

axios.interceptors.request.use(function (config) {
  router.app.$Progress.start()
  return config
}, function (error) {
  router.app.$Progress.fail()
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  router.app.$Progress.finish()
  return response
}, function (error) {
  router.app.$Progress.fail()
  return Promise.reject(error)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')