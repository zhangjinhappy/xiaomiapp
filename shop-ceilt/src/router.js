import Vue from 'vue'
import Router from 'vue-router'
import storge from './utils/storage'
import store from './store/store.js'
let islogin = true
Vue.use(Router)
 var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',redirect: '/home'},
    { path: '/home',  name: 'home', component(resolve){require(["./views/home/index.vue"],resolve)},meta: {islogin:islogin,title:"首页"}},
    { path: '/home/homelist',  name: 'homelist', component(resolve){require(["./views/homelist/index.vue"],resolve)},meta: {islogin:islogin,title:"首页"}},
    { path: '/home/shoplist',  name: 'shoplist', component(resolve){require(["./views/shoplist/index.vue"],resolve)},meta: {islogin:islogin,title:"首页"}},
    {  path: '/car',  name: 'car',  component(resolve){require(["./views/car/index.vue"],resolve)}, meta: {islogin:islogin,title:"首页"} },
    {  path: '/mine', name: 'mine', component(resolve){require(["./views/mine/index.vue"],resolve)},meta: {islogin:islogin,title:"首页"} },
    {  path: '/login',name: 'login',component(resolve){require(["./views/enter/login.vue"],resolve)},meta: {title:"首页"}},
    {  path: '/regisrer',name: 'regisrer',component(resolve){require(["./views/enter/regisrer.vue"],resolve)},meta: {title:"首页"}},
  ],
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next)=>{
  document.title = to.meta.title;
  if(to.meta.islogin){
       if(storge.getLocation("user")==null){
        next({
          path: '/login',
        })
       }else{
         next()
       }
  }else{
   next()
  }
})
export default router
