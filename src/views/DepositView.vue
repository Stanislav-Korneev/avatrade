<template>
  <div class="main">
    <div class="header">
      <app-header header="<h1>Deposit</h1>" class="header-text" />
      <app-button class="logout-button" @click="handleLogout">
        logout
      </app-button>
    </div>
    <deposit-form />
  </div>
</template>

<script setup lang="ts">
  import {useAuthStore} from '@/stores/auth'
  import AppButton from '@/components/general/buttons/AppButton.vue'
  import AppHeader from '@/components/general/AppHeader.vue'
  import DepositForm from '@/components/views/DepositView/DepositForm.vue'
  const store = useAuthStore()

  function handleLogout(): void {
    store.logout()
  }
</script>
<style scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "left mid right";
  align-items: center;
}
.header-text {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: mid;
}
.logout-button {
  min-width: 80px;
  width: 80px;
  grid-area: right;
}
</style>