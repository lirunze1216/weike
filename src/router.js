import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/MyHome.vue'
import Login from './components/MyLogin.vue'
import Register from './components/MyRegister.vue'
import NewEst from './components/home/NewEst.vue'
import TheHot from './components/home/TheHot.vue'
import TheSuggest from './components/home/TheSuggest.vue'
import MyCenter from './components/MyCenter.vue'
import MySetting from './components//my/MySetting.vue'
import AllPro from './components/detail_page/AllPro.vue'
import ProList from './components/detail_page/ProList.vue'
import MyPro from './components/detail_page/MyPro.vue'
import MyCard from './components/detail_page/MyCard.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    { path: '/register', component: Register },

    {
      path: '/home',
      redirect: '/home/newest',
      component: Home,
      name: 'home',
      children: [
        { path: 'newest', component: NewEst },
        { path: 'hot', component: TheHot },
        { path: 'suggest', component: TheSuggest },
      ],
    },
    {
      path: '/center',
      component: MyCenter,
      children: [
        { path: 'userinfo', name: 'userinfo', component: () => import('./components/my_center/my_userinfo.vue') },
      ],
    },
    { path: '/setting', component: MySetting },
    { path: '/allpro', component: AllPro },
    { path: '/prolist', component: ProList },
    { path: '/pro', component: MyPro },
    { path: '/mycard', component: MyCard },
    { path: '/changeUser', name: 'changeUser', component: () => import('./components/my_center/change_user.vue') },
    { path: '/mycardnew', name: 'mycardnew', component: () => import('./components/detail_page/MyCardNew.vue') },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register') {
    return next()
  }
  const token = localStorage.getItem('token')
  if (!token) {
    next('/login')
  } else {
    next()
  }
})
export default router
