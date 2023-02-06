import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/MyHome.vue'
import Login from './components/MyLogin.vue'
import Register from './components/MyRegister.vue'
import NewEst from './components/home/NewEst.vue'
import TheHot from './components/home/TheHot.vue'
import TheSuggest from './components/home/TheSuggest.vue'
import MyCenter from './components/MyCenter.vue'
import MySetting from './components//my/MySetting.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/login' },
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
    { path: '/center', component: MyCenter },
    { path: '/setting', component: MySetting },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
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
