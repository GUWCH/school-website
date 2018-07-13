// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import goods from './components/goods/goods'
// import router from './router'

Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
let AppItem = Vue.extend(App)

const routes = [
  {path: '/goods', component: goods}
]
// 1.0写法 2.0中已废弃
// routerItem.map({
//   '/goods': {
//     component: goods
//   }
// })
let router = new VueRouter({
  routes
})
new AppItem({
  router
}).$mount('#app')
