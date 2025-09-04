<template>
  <div class="footer-social-bar">
    <div class="footer-social-bar__left">
      <a
        v-for="item in left"
        class="footer-social-bar__link"
        target="_blank"
        :key="item.label"
        :href="item.url"
      >
        {{ item.label }}
      </a>
    </div>

    <div class="footer-social-bar__right">
      <a
        v-for="item in right"
        class="footer-social-bar__link"
        target="_blank"
        :key="item.label"
        :href="item.url"
      >
        {{ item.label }}
      </a>

      <NuxtLink to="/privacy" class="footer-social-bar__link">
        Privacy Policy
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { socials } from '@/shared/const/socials'

const left = [ socials.facebook, socials.instagram, socials.telegram ]
const right = [ socials.behance, socials.linkedIn ]
</script>

<style scoped>
.footer-social-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
}

.footer-social-bar__left,
.footer-social-bar__right {
  display: flex;
  flex-direction: row;
  gap: 36px;
}

.footer-social-bar__link {
  text-decoration-line: underline;
  text-underline-offset: 2px;
}
</style>