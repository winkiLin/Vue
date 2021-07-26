import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Direc from './directives/index'
Vue.use(Direc);

new Vue({
  render: h => h(App),
}).$mount('#app')
