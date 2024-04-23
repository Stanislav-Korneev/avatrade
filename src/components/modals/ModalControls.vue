<template>
  <div class="modal-controls">
    <app-icon-button @click="handleSupportButton" class="support-button">
      <support-icon />
    </app-icon-button>
    <app-icon-button @click="handleCloseButton" class="close-button">
      <close-icon />
    </app-icon-button>
  </div>
</template>

<script setup lang="ts">
import AppIconButton from '@/components/general/AppIconButton.vue'
import SupportIcon from '@/components/icons/SupportIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

function handleSupportButton() {
  console.log('so, you want to talk to smb, huh?')
}

function handleCloseButton() {
  console.log('so, you want to close modal, huh?')
}

</script>

<style scoped>
.modal-controls {
  display: flex;
  align-items: center;
}

.support-button {
  width: 32px;
  height: 28px;
  color: black
}

.close-button {
  margin-left: 14px;
  width: 24px;
  height: 24px;
  color: black
}
</style>