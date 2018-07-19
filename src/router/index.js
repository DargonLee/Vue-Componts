import Vue from 'vue'
import Router from 'vue-router'
import Model1 from '@/components/demos/model1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/model1',
      name: 'Model1',
      component: Model1
    }
  ]
})
