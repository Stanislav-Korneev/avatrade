<template>
  <div class="social-login-panel">
    <app-icon-button
      v-for="(value, key, i) in socials"
      :key="i"
      @click="() => handleSocialButton(key)"
    >
      <component :is="value" />
    </app-icon-button>
  </div>
</template>

<script setup lang="ts">
import AppIconButton from '@/components/general/AppIconButton.vue'
import SocialGoogleIcon from '@/components/icons/SocialGoogleIcon.vue'
import SocialFacebookIcon from '@/components/icons/SocialFacebookIcon.vue'
import SocialAppleIcon from '@/components/icons/SocialAppleIcon.vue'
import { useAuthStore } from '@/stores/auth'

const socials = {
  google: SocialGoogleIcon,
  facebook: SocialFacebookIcon,
  apple: SocialAppleIcon
}

const store = useAuthStore();

function handleSocialButton(platform: string): void {
  console.log(`so you're lazy, aren't you? Go on then, use your ${platform} instead`)
  store.login();
}
</script>

<style scoped>
.social-login-panel {
  display: flex;
  align-items: center;
}
</style>