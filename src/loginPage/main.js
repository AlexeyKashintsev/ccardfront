import Vue from 'vue';
import App from './App';
import Buefy from 'buefy';
import VeeValidate from 'vee-validate';

Vue.use(Buefy);

Vue.use(VeeValidate, {
    events: ''
});

Vue.config.productionTip = false

new Vue({
  el: '#signapp',
  components: { App },
  template: '<App/>'
});
