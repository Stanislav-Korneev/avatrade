<template>
  <div class="main">
    <modal-controls class="modal-controls" />
    <app-content-wrapper>
      <app-header header="<h1>Sign-Up, <b>It's Free!</b></h1>" />
      <app-tabs-panel :tabs class="tabs" v-model="activeTabId" />
      <keep-alive>
        <component :is="currentTab">
          <auth-form :authMode="activeTabId" />
        </component>
      </keep-alive>
    </app-content-wrapper>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ModalControls from '@/components/modals/ModalControls.vue'
import AppTabsPanel from '@/components/general/AppTabsPanel.vue'
import SignUpTab from '@/components/views/LoginView/SignUpTab.vue'
import LoginTab from '@/components/views/LoginView/LoginTab.vue'
import AuthForm from '@/components/views/LoginView/AuthForm.vue'
import AppHeader from '@/components/general/AppHeader.vue'
import AppContentWrapper from '@/components/general/layout/AppContentWrapper.vue'

const tabs = [
  {name: 'Sign-Up', id: 'sign'},
  {name: 'Login', id: 'login'},
]

const activeTabId = ref<string>(tabs[0].id)
const currentTab = computed<typeof SignUpTab | typeof LoginTab>(() => {
  return activeTabId.value === 'sign' ? SignUpTab : LoginTab;
})
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.modal-controls {
  margin-left: auto;
}

.tabs {
  margin-top: 30px;
}
</style>
