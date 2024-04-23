<template>
  <slot />
  <p class="disclaimer">
    By creating an account you agree to the privacy policy and to receive economic and marketing comunnications from AvaTrade. You can remove yourself from the mailing list at anytime.
  </p>
  <p class="partner-promo">
    Have a partner number?
    <span class="action-text" @click="handlePartnerPromo">Click here</span>
  </p>
</template>

<script setup lang="ts">
function handlePartnerPromo(): void {
  // here goes some logic. If it's a link, should change to router-link though
  console.log('having partner now, do we? ;)')
}
</script>

<style scoped>
.disclaimer {
  margin-top: 30px;
  font-size: 12px;
  text-align: center;
  color: var(--dark-gray);
}

.partner-promo {
  margin-top: 30px;
  font-size: 16px;
}

.action-text {
  color: var(--dark-blue);
  text-decoration: underline;
  cursor: pointer;
}
</style>