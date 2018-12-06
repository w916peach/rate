import Vue from 'vue'
import Router from 'vue-router'
import Main from '../page/main'
import Test from '../page/test'
import Login from '../page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      name:'main',
      path:'/main',
      component:Main
    },
    {
      name:'showscore',
      path:'/showscore',
      component:()=>{
        return {
          component:import('../page/showscore/index.vue')
        }
      }
    },
    {
      name:'test',
      path:'/test/:userid',
      alias:'/mytest',
      component:Test,
      props:(route)=>{
        console.log(route);
        return {...route.params,...route.query}
      }
    }
  ]
})
