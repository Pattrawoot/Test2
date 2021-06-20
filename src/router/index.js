import Vue from 'vue'
import Router from 'vue-router'


import No1 from '@/components/No1.vue'
import No2 from '@/components/No2.vue'
import No3 from '@/components/No3.vue'
import Select from '@/components/Select.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    },
    {
      path: '/no1',
      name: 'No1',
      component: No1
    },
    {
      path: '/no2',
      name: 'No2',
      component: No2
    },
    {
      path: '/no3',
      name: 'No3',
      component: No3
    },
  ]
})