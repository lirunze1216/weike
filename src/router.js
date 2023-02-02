import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/MyHome.vue'
import NewEst from './components/home/NewEst.vue'
import TheHot from './components/home/TheHot.vue'
import TheSuggest from './components/home/TheSuggest.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
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
  ],
})

export default router
