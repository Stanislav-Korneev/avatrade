import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { requiresAuth: false },
      component: LoginView,
    },
    {
      path: '/deposit',
      name: 'deposit',
      meta: { requiresAuth: true },
      // route level code-splitting
      // this generates a separate chunk (Deposit.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DepositView.vue'),
    },
  ]
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore();
  if(to.name === 'login' && store.isLoggedIn) next({ name: 'deposit' })
  else if(to.meta.requiresAuth && !store.isLoggedIn) next({ name: 'login' })
  else next()
})

export default router
