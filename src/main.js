import Vue from 'vue';
import App from './App';
import router from './router';
import './api/config';
import Buefy from 'buefy';
import VeeValidate from 'vee-validate';

Vue.use(Buefy);

Vue.use(VeeValidate, {
    events: ''
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
