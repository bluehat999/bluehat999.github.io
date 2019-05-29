import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const router = new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: require('./views/home/index.vue'),
    },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})

router.beforeEach((to, form, next) => {
  console.warn("before each")
    //   if (to.query && to.query.token) {
    //     Cookies.set('pc-bi-server', to.query.token)
    //   }
    //   next()
    })
    
    router.afterEach((to, from) => {
    //   const arr = pathList.filter((item) => {
    //     return to.path && to.path.indexOf(item) !== -1
    //   })
    //   if (arr.length === 0) {
    //     store.dispatch('user/getAccount', {})
    //   }
    })

export default router
