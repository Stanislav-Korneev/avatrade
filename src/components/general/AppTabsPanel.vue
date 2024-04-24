<template>
<div class="app-tabs-panel">
  <div
    v-for="(tab, i) in tabs"
    :key="i"
    :class="['tab', tab.id === activeTabId ? 'active' : '']"
    @click="() => handleTabPick(tab.id)"
    @keydown.enter="() => handleTabPick(tab.id)"
    @keydown.space="() => handleTabPick(tab.id)"
    tabindex="0"
  >
    {{tab.name}}
  </div>
</div>
</template>
<script setup lang="ts">
interface Props {
  tabs: { name: string; id: string }[];
}
defineProps<Props>();

const activeTabId = defineModel();

function handleTabPick(tab: string): void {
  activeTabId.value = tab;
}
</script>
<style scoped>
.app-tabs-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  font-size: 15px;
  font-weight: 700;
  border-bottom: 3px solid transparent;
  color: var(--dark-gray);
  transition: .25s;
  cursor: pointer;
}
.active {
  color: var(--dark-blue);
  border-color: var(--dark-blue);
}
</style>