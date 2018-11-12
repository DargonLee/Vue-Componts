import Vue from 'vue'
import Router from 'vue-router'
import Model1 from '@/components/demos/model1'
import Model2 from '@/components/demos/model2'
import Overview from '@/components/demos/overview'
import Hello from '@/components/hello'
import Confirm from '@/components/demos/confirm1'
import PageView from '@/components/demos/pageview'
import InputView from '@/components/demos/input1'
import Axios from '@/components/demos/axios'

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
            path: '/model2',
            name: 'Model2',
            component: Model2

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
        },
        {
            path: '/input1',
            name: 'input1',
            component: InputView
        },
        {
            path: '/axios',
            name: 'axios',
            component: Axios
        }
    ]
})
