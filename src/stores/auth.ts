import { defineStore } from 'pinia'
import router from '@/router'

interface IState {
  isLoggedIn: boolean,
}

export const useAuthStore = defineStore('auth', {
  state: (): IState => ({
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn') ?? 'false'),
  }),

  actions: {
    login(): void {
      // some api logic...
      this.isLoggedIn = true;
      this.syncLocalStorage();
      router.push('/deposit')
    },
    logout(): void {
      // some api logic...
      this.isLoggedIn = false;
      this.syncLocalStorage();
      router.push('/login')
    },
    syncLocalStorage(): void {
      localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
    }
  }
})
