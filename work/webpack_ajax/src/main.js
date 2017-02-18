import Vue from 'vue'
import App from './App'

//引入并使用插件
import VueResource from 'vue-resource'
Vue.use(VueResource)


/*eslint-disable no-new*/
new Vue({
  el: 'body',
  components: {App}
})