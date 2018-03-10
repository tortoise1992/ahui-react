import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Pos from '@/components/page/pos'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    }
  ]
})
