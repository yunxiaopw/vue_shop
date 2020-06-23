import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
import vuetify from './plugins/vuetify'

axios.defaults.baseUrl = 'localhost'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
