<template>
  <app-basic-input
    :type
    :id
    :placeholder
    :error
    @button-click="handleHidePassword"
  >
    <template v-slot:icon>
      <password-icon />
    </template>
    <template v-slot:button>
      <app-icon-button type="button" @click="handleHidePassword">
        <hide-password-icon />
      </app-icon-button>
    </template>
  </app-basic-input>
</template>

<script setup lang="ts">
import AppBasicInput from '@/components/general/AppBasicInput.vue'
import PasswordIcon from '@/components/icons/PasswordIcon.vue'
import HidePasswordIcon from '@/components/icons/HidePasswordIcon.vue'
import { ref } from 'vue'
import AppIconButton from '@/components/general/AppIconButton.vue'

defineProps({
  id: {
    type: String,
    default: 'password',
  },
  placeholder: {
    type: String,
    default: 'Password',
  },
  error: {
    type: String,
    default: '',
  }
})

const type = ref<string>('password');

function handleHidePassword(): void {
  type.value = type.value === 'password' ? 'text' : 'password';
}
</script>