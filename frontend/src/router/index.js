import Vue from 'vue'
import Router from 'vue-router'
import navbar from '@/components/navbar'
import viewPersonnel from '@/components/view'
import add from '@/components/add'
import edit from '@/components/edit'

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
      component: viewPersonnel
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit
    }
  ]
})
