<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="store.login()">login</button>
    <button @click="store.logout()">logout</button>
  </div>
</template>

<script setup lang="ts">
  import {useAuthStore} from '@/stores/auth'
  const store = useAuthStore()
</script>
