import { createApp } from 'vue'
import Vue from 'vue'
import App from './App'
import router from './router'
import './components'


/* eslint-disable no-new */
window.Vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

