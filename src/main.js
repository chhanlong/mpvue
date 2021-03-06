import Vue from 'vue'
import App from './App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'
import $http from '@/api'

import '@/components/global'
import '../static/css/weui.css'
import '../static/css/common.css'

Vue.prototype.$http = $http
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(MpvueRouterPatch)
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
