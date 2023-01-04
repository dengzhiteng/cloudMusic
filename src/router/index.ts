import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/discover',
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import('@/views/discover/index.vue'),
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/index.vue')
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('@/views/friend/index.vue'),
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
