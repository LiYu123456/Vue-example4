// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 配置的属性名是固定的名字，不能改名字，这里router是固定的，如果自定义路由器名router:myrouter
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
