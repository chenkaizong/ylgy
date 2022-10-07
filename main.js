import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import * as util from '@/common/js/util';
Vue.prototype.$util = util;

import store from './store'
Vue.prototype.$store = store;

import filter from '@/common/filter/filter'

import mixin from '@/common/mixin/mixin'
Vue.mixin(mixin) 


App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif