import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

 var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/home',  name: 'home', component(resolve){require(["./views/home/index.vue"],resolve)},meta: {title:"首页"}},
    {  path: '/car',  name: 'car',  component(resolve){require(["./views/car/index.vue"],resolve)}, meta: {title:"首页"} },
    {  path: '/mine', name: 'mine', component(resolve){require(["./views/mine/index.vue"],resolve)},meta: {title:"首页"} },
    {  path: '/login',name: 'login',component(resolve){require(["./views/enter/login.vue"],resolve)},meta: {title:"首页"}},
    {  path: '/regisrer',name: 'regisrer',component(resolve){require(["./views/enter/regisrer.vue"],resolve)},meta: {title:"首页"}},
  ],
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next)=>{
  document.title = to.meta.title;
  next();
})
export default router
