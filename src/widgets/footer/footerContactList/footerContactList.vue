<template>
  <div class="footer-contact-list">
    <div class="footer-contact-list__contacts">
      <p class="footer-contact-list__caption">
        For all questions
      </p>

      <div class="footer-contact-list__links">
        <a href="tel:+79202780068" class="footer-contact-list__link">
          +7 (920) 278—00—68
        </a>

        <a href="mailto:qtim@agency.com" class="footer-contact-list__link">
          qtim@agency.com
        </a>
      </div>
    </div>

    <div
      v-for="office in offices"
      :key="office.label"
      class="footer-contact-list__office"
    >
      <p class="footer-contact-list__office-label">
        {{ office.label }}
      </p>

      <div class="footer-contacts-list__office__address">
        <p class="footer-contact-list__office__address-label">
          {{ office.address }}
        </p>

        <button-component
          class="footer-contact-list__office-btn text-white"
          target="_blank"
          :icon="'ic:baseline-near-me'"
          :to="office.url"
          :rounded="true"
          :ui="{ base: 'w-8 h-8 p-0 flex items-center justify-center' }"
          :style="{ backgroundColor: 'var(--main-black)' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import buttonComponent from '~/shared/ui/buttonComponent/buttonComponent.vue'

import { offices } from '@/shared/const/offices'
</script>

<style scoped>
.footer-contact-list {
  width: 152px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.footer-contacts-list__contacts {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-contact-list__links {
  display: flex;
  flex-direction: column;
}

.footer-contact-list__office {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-contact-list__office-label {
  font-weight: 400;
  font-size: 16px;
}

.footer-contact-list__office-address {
  max-width: 152px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-contacts-list__office__address {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-contact-list__office__address-label {
  line-height: 20px;
}
</style>