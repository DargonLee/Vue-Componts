import Vue from 'vue'
import Router from 'vue-router'
import Model1 from '@/components/demos/model1'
import Overview from '@/components/demos/overview'
import Hello from '@/components/hello'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'hello',
            component: Hello
        },
        {
            path:'/overview',
            name: 'overview',
            component: Overview
        },
        {
            path: '/model1',
            name: 'Model1',
            component: Model1
        }
    ]
})
