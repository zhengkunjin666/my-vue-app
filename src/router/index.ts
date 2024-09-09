import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    //   history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory('/my-vue-app/'),
    routes: [
        {
            path: '/',
            redirect: '/iqiyi-tv-play',
        },
        {
            path: '/iqiyi-tv-play',
            name: 'IqiyiTVPlay',
            component: () => import('@/views/iqiyi/TVPlay.vue'),
            meta: {
                keepAlive: true,
                title: "爱奇艺"
            },
        },
        {
            path: '/iqiyi-movie',
            name: 'IqiyiMovie',
            component: () => import('@/views/iqiyi/TheMovie.vue'),
            meta: {
                keepAlive: true,
                title: "爱奇艺"
            },
        },
        {
            path: '/iqiyi-animation',
            name: 'IqiyiAnimation',
            component: () => import('@/views/iqiyi/TheAnimation.vue'),
            meta: {
                keepAlive: true,
                title: "爱奇艺"
            },
        },
        {
            path: '/tencent-tv-play',
            name: 'TencentTVPlay',
            component: () => import('@/views/tencent/TVPlay.vue'),
            meta: {
                keepAlive: true,
                title: "腾讯视频"
            },
        },
        {
            path: '/tencent-movie',
            name: 'TencentMovie',
            component: () => import('@/views/tencent/TheMovie.vue'),
            meta: {
                keepAlive: true,
                title: "腾讯视频"
            },
        },
        {
            path: '/tencent-animation',
            name: 'TencentAnimation',
            component: () => import('@/views/tencent/TheAnimation.vue'),
            meta: {
                keepAlive: true,
                title: "腾讯视频"
            },
        },
        {
            path: '/bilibili-tv-play',
            name: 'BilibiliTVPlay',
            component: () => import('@/views/bilibili/TVPlay.vue'),
            meta: {
                keepAlive: true,
                title: "哔哩哔哩"
            },
        },
        {
            path: '/bilibili-movie',
            name: 'BilibiliMovie',
            component: () => import('@/views/bilibili/TheMovie.vue'),
            meta: {
                keepAlive: true,
                title: "哔哩哔哩"
            },
        },
        {
            path: '/bilibili-animation',
            name: 'BilibiliAnimation',
            component: () => import('@/views/bilibili/TheAnimation.vue'),
            meta: {
                keepAlive: true,
                title: "哔哩哔哩"
            },
        },
        {
            path: '/play',
            name: 'play',
            component: () => import('@/views/PlayView.vue'),
            meta: {
                keepAlive: true
            },
        }
        // {
        //     path: '/iqiyi',
        //     name: 'iqiyi',
        //     redirect: '/iqiyi/tv-play',
        //     component: () => import('@/views/NavView.vue'),
        //     meta: {
        //         keepAlive: true,
        //         title: "爱奇艺"
        //     },
        //     children: [
        //         {
        //             path: 'tv-play',
        //             name: 'IqiyiTVPlay',
        //             component: () => import('@/views/iqiyi/TVPlay.vue'),
        //         },
        //         {
        //             path: 'movie',
        //             name: 'IqiyiMovie',
        //             component: () => import('@/views/iqiyi/TheMovie.vue'),
        //         },
        //         {
        //             path: 'animation',
        //             name: 'IqiyiAnimation',
        //             component: () => import('@/views/iqiyi/TheAnimation.vue'),
        //         },
        //     ]
        // },
        // {
        //     path: '/tencent',
        //     name: 'tencent',
        //     redirect: '/tencent/tv-play',
        //     component: () => import('@/views/NavView.vue'),
        //     meta: {
        //         keepAlive: true,
        //         title: "腾讯视频"
        //     },
        //     children: [
        //         {
        //             path: 'tv-play',
        //             name: 'TencentTVPlay',
        //             component: () => import('@/views/tencent/TVPlay.vue'),
        //         },
        //         {
        //             path: 'movie',
        //             name: 'TencentMovie',
        //             component: () => import('@/views/tencent/TheMovie.vue'),
        //         },
        //         {
        //             path: 'animation',
        //             name: 'TencentAnimation',
        //             component: () => import('@/views/tencent/TheAnimation.vue'),
        //         },
        //     ]
        // },
        // {
        //     path: '/bilibili',
        //     name: 'bilibili',
        //     redirect: '/bilibili/tv-play',
        //     component: () => import('@/views/NavView.vue'),
        //     meta: {
        //         keepAlive: true,
        //         title: "哔哩哔哩"
        //     },
        //     children: [
        //         {
        //             path: 'tv-play',
        //             name: 'BilibiliTVPlay',
        //             component: () => import('@/views/bilibili/TVPlay.vue'),
        //         },
        //         {
        //             path: 'movie',
        //             name: 'BilibiliMovie',
        //             component: () => import('@/views/bilibili/TheMovie.vue'),
        //         },
        //         {
        //             path: 'animation',
        //             name: 'BilibiliAnimation',
        //             component: () => import('@/views/bilibili/TheAnimation.vue'),
        //         },
        //     ]
        // },
        // {
        //     path: '/',
        //     component: () => import('@/views/NavView.vue'),
        //     children: [
        //         {
        //             path: '/play',
        //             name: 'play',
        //             component: () => import('@/views/PlayView.vue'),
        //             meta: {
        //                 keepAlive: true
        //             },
        //         }
        //     ]
        // },
    ]
})

export default router