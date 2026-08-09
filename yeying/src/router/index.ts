import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'solution',
          name: 'solution',
          component: () => import('@/views/solution/SolutionView.vue')
        },
        {
          path: 'docs',
          name: 'docs',
          component: () => import('@/views/docs/DocsView.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('@/views/blog/BlogView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/about/AboutView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 90, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
