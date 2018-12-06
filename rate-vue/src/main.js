import Vue from 'vue'
import App from './App'
import router from './router'
import './elementui'
import store from  './store'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,// 每个组件都可以获得 $store
  render: h => h(App)
})
