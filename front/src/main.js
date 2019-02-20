import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './routes'
import store from './store'
import echarts from 'echarts'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(VueRouter)
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')