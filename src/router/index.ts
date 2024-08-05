import { createRouter, createWebHistory } from 'vue-router'
 
const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory('my-vue-app'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/NavView.vue'),
      redirect: '/tv-play',
      children: [
          {
              path: '/tv-play',
              name: 'TVPlay',
              component: () => import('@/view/TVPlay.vue')
          },
        ]
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('../view/PlayView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../view/TestView.vue')
    },
  ]
})
 
export default router