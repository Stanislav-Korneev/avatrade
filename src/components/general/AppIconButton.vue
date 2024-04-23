<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

button:active {
  transform: scale(.94);
}
</style>