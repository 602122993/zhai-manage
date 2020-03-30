import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import MenuManage from '../views/SystemManager/MenuManage'
import Login from '../views/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/menuManage',
          component: MenuManage,
          meta: {
            title: '菜单管理'
          }
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登陆'
      }
    }
  ]
})
