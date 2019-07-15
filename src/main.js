import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import date from './filters/date'

Vue.filter('formatDate', date)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
