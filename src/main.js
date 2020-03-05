import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import AFTableColumn from 'af-table-column'
import vshare from 'vshare'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
import './assets/css/reset.css'

// import axios from 'axios'
// axios.defaults.baseURL = 'http://192.168.0.182/api/'
Vue.use(vshare)
Vue.use(AFTableColumn)

Vue.use(ElementUI)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
