import Vue from 'vue'
import axios from 'axios';

const baseURL = (process.env.NODE_ENV === 'development')
? 'http://109.111.79.6:8080/lk/application/'
: '/lk/application/';

export const API = axios.create({
	baseURL: baseURL,
  withCredentials: true,
  headers: {
  	'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
  }
});
API.install = function(){
  Object.defineProperty(Vue.prototype, '$API', {
    get () { return API }
 });
}
Vue.use(API);