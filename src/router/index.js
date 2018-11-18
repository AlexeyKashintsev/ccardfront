import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@/pages/Auth';
import Home from '@/pages/Home';

Vue.use(Router)

import DefaultLayout from '@/layouts/DefaultLayout'
import AppLayout from '@/layouts/AppLayout'

export default new Router({
  routes: [,
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      meta: {
        template: DefaultLayout
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        template: AppLayout
      }
    }
  ]
})
