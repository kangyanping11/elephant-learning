import { createWebHistory, createRouter } from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'


const routes = [
  {
      path: '/',
      component: BasicLayout,
      redirect: '/home',
      children: [
          {
              path: 'home',
              name: 'Home',
              component: () => import('@/views/Home.vue'),
          },
          {
              path: 'about',
              name: 'About',
              component: () => import('@/views/About.vue'),
          }
      ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


