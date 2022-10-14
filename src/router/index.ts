import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/views/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: 'discover',
    component: layout,
    children: [
      {
        path: 'discover',
        name: 'discover',
        component: () => import('@/views/home/Discover.vue'),
      },
    ]
  },
  {
    path: '/my',
    name: 'my',
    component: layout,
    children: [
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my/index.vue')
      },
    ]
  },
  {
    path: '/friend',
    name: 'friend',
    component: layout,
    children: [
      {
        path: 'friend',
        name: 'friend',
        component: () => import('@/views/friend/index.vue')
      },
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
