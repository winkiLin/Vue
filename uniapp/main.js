import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import api from './utils/req.js'
Vue.prototype.$api = api

import uView from 'uview-ui';
Vue.use(uView);

import store from './store/index.js'

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
