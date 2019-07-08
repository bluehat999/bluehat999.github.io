import Vue from 'vue'
import router from './router'
import App from './App.vue'

// import 'assets/font/iconfont'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
