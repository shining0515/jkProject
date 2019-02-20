import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Watch from './components/Watch.vue'

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/watch',
      component: Watch
    }, {
      path: '/login',
      component: Login
    }
  ]
})