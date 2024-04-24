<template>
  <form @submit.prevent="handleFormSubmit">
    <app-basic-input
      type="email"
      id="email"
      placeholder="Email"
      v-model="emailValue"
      :error="emailError"
      @focusout="validateEmail"
    >
      <template v-slot:icon>
        <mail-icon />
      </template>
    </app-basic-input>
    <password-input
      v-model="passwordValue"
      :error="passwordError"
      @focusout="validatePassword"
    />
    <app-button type="submit" color="blue" class="submit-button">
      {{ submitButtonText }}
    </app-button>
  </form>
  <div class="divider">
    <hr><span>Or</span><hr>
  </div>
  <social-login-panel />
</template>

<script setup lang="ts">
import SocialLoginPanel from '@/components/views/LoginView/SocialLoginPanel.vue'
import AppBasicInput from '@/components/general/form/AppBasicInput.vue'
import PasswordInput from '@/components/general/form/PasswordInput.vue'
import AppButton from '@/components/general/buttons/AppButton.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import { inputIsEmpty } from '@/helpers/InputValidators'
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const props = defineProps({
  authMode: String,
})
const store = useAuthStore();

const emailValue = ref<string>('');
const emailError = ref<string>('');

const passwordValue = ref<string>('');
const passwordError = ref<string>('');

const submitButtonText = computed<string>(() => {
  return props.authMode === 'sign' ? 'Create My Account' : 'Login';
})

function handleFormSubmit() {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if(!isEmailValid || !isPasswordValid) return;
  store.login();
  console.log('login: ', emailValue.value);
  console.log('password: ', passwordValue.value);
}

function validateEmail(): boolean {
  emailError.value = inputIsEmpty(emailValue.value);
  return !emailError.value.length;
}

function validatePassword(): boolean {
  passwordError.value = inputIsEmpty(passwordValue.value);
  return !passwordError.value.length;
}
</script>
<style scoped>
form {
  width: 100%;
}
.divider {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 600;
}
.divider span {
  padding: 0 10px 4px 10px;
}
hr {
  width: 100%;
  height: 1px;
  background-color: var(--gray);
}

form {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  margin-top: 40px;
}

.submit-button {
  width: 240px;
  margin: 10px auto 0;
}
</style>