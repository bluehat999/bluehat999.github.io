import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/index.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('./components/c-catalog/index.vue')
    }
    // {
    //   path: '/',
    //   name: 'catalog1',
    //   component: () => import('./views/home/index.vue')
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.warn('before each',to,from,next)
// })

// router.afterEach((to, from) => {
//   console.log('after Each')
// })

export default router
