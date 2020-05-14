import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

import FastClick from 'fastclick'

import store from './store'
import toast from 'components/common/toast'

Vue.use(toast)

Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router, 
  store
}).$mount('#app')
