import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  base: '/task_vue_weekly/week7/dist',
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/OrdersView.vue')
        }
      ]
    }
  ]
})

export default router
