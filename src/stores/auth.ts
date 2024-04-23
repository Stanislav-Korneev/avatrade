import { defineStore } from 'pinia'

interface IState {
  isLoggedIn: boolean,
}

export const useAuthStore = defineStore('auth', {
  state: (): IState => ({
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn') ?? 'false'),
  }),

  actions: {
    login(): void {
      this.isLoggedIn = true;
      this.syncLocalStorage();
    },
    logout(): void {
      this.isLoggedIn = false;
      this.syncLocalStorage();
    },
    syncLocalStorage(): void {
      localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
    }
  }
})
