import Vue from 'vue'
import VueRouter from 'vue-router'  //引入
import app from './components/app'
import about from './components/about'
import home from './components/home'

//声明使用插件
Vue.use(VueRouter)

//创建路由器对象
const router = new VueRouter()

//配置路由
router.map({
  '/about': {component: about},
  '/home': {component: home}
})

//启动应用
router.start(app, '#app')
