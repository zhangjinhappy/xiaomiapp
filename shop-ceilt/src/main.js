import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YDUI from 'vue-ydui';
import './assets/css/ydui.rem.css';
import './assets/css/index.less'
import Utils from './utils/utils'
import axios from './api'
Vue.config.productionTip = false
Vue.prototype.$utils = Utils
Vue.prototype.$axios = axios
Vue.use(YDUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
