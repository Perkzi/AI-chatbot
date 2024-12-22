import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueClipBoard from 'vue-clipboard2'

Vue.use(VueClipBoard)
//use：将第三方模块 注入到Vue实例对象中的方法
Vue.use(VueAxios, axios)

// 设置 Axios 的默认基础 URL
axios.defaults.baseURL = 'http://localhost:5000'; // 替换后端地址和端口
//axios.defaults.baseURL = 'http://localhost:4523'; // mock地址和端口


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
