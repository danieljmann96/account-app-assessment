import Vue from 'vue'
import Router from 'vue-router'
import navbar from '@/components/navbar'
import view from '@/components/view'
import add from '@/components/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'navbar',
      component: navbar
    },
    {
      path: '/view',
      name: 'view',
      component: view
    },
    {
      path: '/add',
      name: 'add',
      component: add
    }
  ]
})
