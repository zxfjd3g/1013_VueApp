import Vue from 'vue'
import VueRouter from 'vue-router'  //引入
import app from './components/app'
import routeConfig from './routeConfig'

//声明使用插件
Vue.use(VueRouter)

//创建路由器对象
const router = new VueRouter({
  linkActiveClass: 'active', //指定当前路由链接的样式名
  history: true //去掉#!
})

//配置路由
routeConfig(router)

//启动应用
router.start(app, '#app')

//立即请求一个默认路由
router.go('/about')
