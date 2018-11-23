import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@/pages/Auth';
import Home from '@/pages/Home';
import Privilegies from '@/pages/Privilegies';
import History from '@/pages/History';

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
    },
    {
      path: '/Privilegies',
      name: 'Privilegies',
      component: Privilegies,
      meta: {
        template: AppLayout
      }
    },
    {
      path: '/history',
      name: 'History',
      component: History,
      meta: {
        template: AppLayout
      }
    }
  ]
})
