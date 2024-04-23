<template>
  <button :class="color">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    validator(value) {
      return ['blue'].includes(value as string);
    },
    default() {
      return 'blue';
    }
  }
})
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 37px;
  min-width: 240px;
  min-height: 50px;
  border-radius: 25px;
  font-family: inherit;
  font-size: 18px;
  cursor: pointer;
}

button:active {
  transform: scale(.99);
}

.blue {
  background-color: var(--blue);
  color: var(--white);
}
.blue:focus-visible {
  outline: 2px solid var(--dark-blue);
}
</style>