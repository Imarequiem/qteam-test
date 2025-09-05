<template>
  <u-header class="header">
    <u-header-section>
      <NuxtLink to="/" aria-label="Home">
        <img
          src="/logo.svg"
          width="84"
          height="25"
          alt="Logo"
        />
      </NuxtLink>
    </u-header-section>

    <u-header-section class="header__right-side">
      <u-header-nav class="links">
        <u-header-nav-item>
          <nuxt-link to="/works" class="links__link">
            Works
          </nuxt-link>
        </u-header-nav-item>

        <u-header-nav-item>
          <nuxt-link to="/about" class="links__link">
            About
          </nuxt-link>
        </u-header-nav-item>
      </u-header-nav>

      <u-header-actions class="actions">
        <button-component
          class="language-button cursor-pointer"
          rounded
          :icon="'flag:gb-4x3'"
          :variant="'outline'"
          :ui="{ base: 'w-[52px] h-[52px] flex items-center justify-center ring-0' }"
        />

        <button-component
          class="work-button text-white cursor-pointer"
          rounded
          label="Let's Talk"
          :ui="{ base: 'w-[142px] h-[52px] flex items-center justify-center bg-[#111] text-xl' }"
          :style="{ backgroundColor: '#111' }"
        />
      </u-header-actions>
    </u-header-section>
  </u-header>
</template>

<script setup lang="ts">
import buttonComponent from '@/shared/ui/buttonComponent/buttonComponent.vue'
</script>

<style scoped>
.header {
  width: 100%;
  height: 121px;
  padding: 40px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-white);
}

.header__right-side {
  display: flex;
  align-items: center;
  gap: 91px;
}

.links {
  display: flex;
  gap: 24px;
}

.links__link {
  font-size: 20px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

:deep(.language-button) {
  background-color: var(--main-white) !important;
  border: 2px solid #0000001A;
}
</style>