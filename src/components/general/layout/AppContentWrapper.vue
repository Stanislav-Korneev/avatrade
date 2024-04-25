<template>
  <div class="content-wrapper">
    <slot />
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
}

@media (max-width: 380px) {
  .content-wrapper {
    width: 300px;
  }
}
</style>