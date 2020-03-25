import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import AFTableColumn from 'af-table-column'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
import './assets/css/reset.css'

const bus = new Vue() // EventBus实现兄弟组件通信

export default bus

 


import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css'
Vue.use(Share)

// import axios from 'axios'
// axios.defaults.baseURL = 'http://192.168.0.182/api/'
Vue.use(AFTableColumn)
Vue.use(ElementUI)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
