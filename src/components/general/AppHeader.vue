<template>
  <header v-html="header" />
</template>

<script setup lang="ts">
defineProps({
  header: String,
})
</script>

<style>
h1 {
  font-size: 18px;
  font-weight: 600;
  color: var(--dark-blue);
}

h1 b {
  font-weight: 800;
}
</style>