import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import {vuetify} from './vuetify'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router, 
  render: h => h(App),
}).$mount('#app')


