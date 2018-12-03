import Vue from 'vue'
import Router from 'vue-router'
import Main from '../page/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/main',
      component:Main
    }
  ]
})
