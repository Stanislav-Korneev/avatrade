<template>
  <div class="app-input">
    <label v-if="$slots.icon" :for="id">
      <slot name="icon" />
    </label>
    <input
      :id="id"
      :placeholder="placeholder"
      :type="type"
      v-model="inputValue"
    >
    <span v-if="error" class="error-text">
      {{ error }}
    </span>
    <div class="button">
      <slot name="button" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: String,
  id: String,
  placeholder: String,
  error: String,
})

const inputValue = defineModel();
</script>

<style scoped>
.app-input {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  border: 1px solid var(--light-gray);
  border-radius: 5px;
  transition: .2s;
}

.app-input:focus-within {
  border-color: var(--dark-gray);
  outline: 1px solid var(--dark-gray);
}

label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
}

input {
  width: 100%;
  height: 100%;
  margin: 0 4px;
  padding: 0 6px;
  font-size: 16px;
  color: var(--dark-gray);
  outline: none;
}

.error-text {
  position: absolute;
  top: 2px;
  right: 10px;
  font-size: 14px;
  color: var(--red);
}

.button {
  margin-right: 10px;
}
</style>