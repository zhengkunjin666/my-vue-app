import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    //   history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory('/my-vue-app/'),
    routes: [
        {
            path: '/',
            redirect: '/tv-play',
        },
        {
            path: '/tv-play',
            name: 'TVPlay',
            component: () => import('@/view/TVPlay.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/movie',
            name: 'Movie',
            component: () => import('@/view/TheMovie.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/animation',
            name: 'Animation',
            component: () => import('@/view/TheAnimation.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/play',
            name: 'play',
            component: () => import('@/view/PlayView.vue'),
            meta: {
                keepAlive: true
            }
        },
    ]
})

export default router