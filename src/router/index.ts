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
  if(to.path === '/') next({ path: '/login' });
  if(to.path === '/login' && store.isLoggedIn) next({ path: '/deposit' })
  else if(to.meta.requiresAuth && !store.isLoggedIn) next({ path: '/login' })
  else next()
})

export default router
