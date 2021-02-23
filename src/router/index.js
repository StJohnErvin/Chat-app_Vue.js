import Vue from 'vue'
import Router from 'vue-router'
import PageChat from '@/components/PageChat'
import LoginRegister from '@/components/LoginRegister'
import PageUsers from '@/components/PageUsers'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: LoginRegister },

    { path: '/login', component: LoginRegister },
    { path: '/chat', component: PageChat },
    { path: '/user', component: PageUsers },
    { path: '/signup', component: Signup }





  ]
})




