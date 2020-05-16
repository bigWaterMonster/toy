import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from './components/Layout.vue'
import Icon from './components/Icon.vue'
import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false

Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
