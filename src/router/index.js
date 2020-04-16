import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import welcomePage from '@/components/welcomePage'
import startGame from '@/components/startGame'

// import chooseColor from '@/components/chooseColor'
// import results from '@/components/results'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/startGame',
      name: 'startGame',
      component: startGame
    },
    {
      path: '/',
      name: 'welcomePage',
      component: welcomePage
    }
  ]
})