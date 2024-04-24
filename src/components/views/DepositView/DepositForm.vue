<template>
  <form @submit.prevent="handleFormSubmit">
    <app-basic-input
      type="text"
      id="cardNumber"
      placeholder="Card number"
      v-model="cardNumberValue"
      :error="cardNumberError"
      @focusout="validateCardNumber"
      class="card-number-input"
    />
    <app-basic-input
      type="text"
      id="expire"
      placeholder="Expire"
      v-model="dateValue"
      :error="dateError"
      @focusout="validateDate"
      class="expire-date-input"
    />
    <app-basic-input
      type="text"
      id="code"
      placeholder="Code"
      v-model="codeValue"
      :error="codeError"
      @focusout="validateCode"
      class="security-code-input"
    />
    <app-button type="submit" color="blue" class="submit-button">
      Deposit
    </app-button>
  </form>
</template>
<script setup lang="ts">
import AppButton from '@/components/general/buttons/AppButton.vue'
import AppBasicInput from '@/components/general/form/AppBasicInput.vue'
import { ref } from 'vue'
import { inputIsEmpty } from '@/helpers/InputValidators'

const cardNumberValue = ref<string>('');
const cardNumberError = ref<string>('');

const dateValue = ref<string>('');
const dateError = ref<string>('');

const codeValue = ref<string>('');
const codeError = ref<string>('');

function validateCardNumber(): boolean {
  cardNumberError.value = inputIsEmpty(cardNumberValue.value);
  return !cardNumberError.value.length;
}

function validateDate(): boolean {
  dateError.value = inputIsEmpty(dateValue.value);
  return !dateError.value.length;
}

function validateCode(): boolean {
  codeError.value = inputIsEmpty(codeValue.value);
  return !codeError.value.length;
}

function handleFormSubmit(): void {
  const isCardNumberValid = validateCardNumber();
  const isDateValid = validateDate();
  const isCodeValid = validateCode();

  if(!isCardNumberValid || !isDateValid || !isCodeValid) return;
  console.log('cardNumber: ', cardNumberValue.value);
  console.log('date: ', dateValue.value);
  console.log('code: ', codeValue.value);
}
</script>
<style scoped>
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px 0;
  width: 360px;
  margin-top: 40px;
}

.card-number-input {
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
}

.expire-date-input {
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
}
.security-code-input {
  grid-row: 2 / span 1;
  grid-column: 2 / span 2;
}

.submit-button {
  grid-row: 3 / span 1;
  grid-column: 1 / span 2;
}
</style>