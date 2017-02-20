/**
 * 注册路由的模块
 */
import about from './components/about'
import home from './components/home'
import news from './components/news'
import message from './components/message'
import messageDetail from './components/message-detail'

export default function routerConfig(router) {
  router.map({
    '/about': {component: about},
    '/home': {
      component: home,
      subRoutes: {
        '/news': {component: news},
        '/message': {
          component: message,
          subRoutes: {
            '/mdetail/:id': {component: messageDetail}
          }
        }
      }
    }
  })
}