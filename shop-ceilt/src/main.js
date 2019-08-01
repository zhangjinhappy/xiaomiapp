import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import 'vue-ydui/dist/ydui.base.css';
import store from './store/store.js'
import axios from './api/index'
import utils from './utils/utils';
import YDUI from 'vue-ydui'
import './assets/css/ydui.rem.css'
import './assets/css/index.less'

import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading,
}
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  error: require('./assets/images/loading.gif'),
  loading: require('./assets/images/loading.gif'),
  attempt: 2
})
Vue.config.productionTip = false
Vue.use(YDUI);
Vue.prototype.$axios = axios
Vue.prototype.$utils = utils
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
