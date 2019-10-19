import Vue from 'vue'
import App from './App.vue'
import vuePayKeyboard1 from './lib/index.js'
Vue.use(vuePayKeyboard1)

new Vue({
  el: '#app',
  render: h => h(App)
})
