// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import axios from 'axios'

import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/app.less'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueQuillEditor);
Vue.prototype.$http = axios;

import router from './router'
import store from "./store"
import filter from "./filter"
import App from './App'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
