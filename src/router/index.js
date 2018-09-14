import Vue from 'vue'
import Router from 'vue-router'
import Model1 from '@/components/demos/model1'
import Overview from '@/components/demos/overview'
import Hello from '@/components/hello'
import Confirm from '@/components/demos/confirm1'
import PageView from '@/components/demos/pageview'

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
        },
        {
            path: '/confirm1',
            name: 'confirm1',
            component: Confirm
        },
        {
            path: '/pageview',
            name: 'pageview',
            component: PageView
        }
    ]
})
