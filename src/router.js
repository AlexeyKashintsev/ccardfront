import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'main',
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
    },
    {
      path: '/privilegies',
      name: 'Privilegies',
      component: () => import(/* webpackChunkName: 'privilegies' */ './pages/Privilegies.vue'),
    },
    {
      path: '/history',
      name: 'History',
      component: () => import(/* webpackChunkName: 'history' */ './pages/History.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import(/* webpackChunkName: 'profile' */ './pages/Profile.vue'),
    },
  ],
})