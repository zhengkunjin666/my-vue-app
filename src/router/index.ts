import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../view/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../view/TestView.vue')
    },
  ]
})
 
export default router