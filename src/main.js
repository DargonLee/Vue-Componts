import Vue from 'vue'
// The Vue build version to load with the `import` command
import hljs from "highlight.js"
import 'highlight.js/styles/atom-one-light.css' //样式文件
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import App from './App'
import router from './router'
import './common/base.css'
import coder from './components/coder/coder.vue'
import subtitle from './components/subtitle/subtitle.vue'

import MessageBox from "./components/confirm/index"
Vue.use(MessageBox)

Vue.component('v-coder',coder)
Vue.component('v-subtitle',subtitle)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
