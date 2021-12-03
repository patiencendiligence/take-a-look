import { createApp } from 'vue'

import App from './App'
import router from './router'
import './components'

// createApp(App).mount('#app')
/* eslint-disable no-new */
createApp({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
