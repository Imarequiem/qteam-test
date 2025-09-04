<template>
  <UHeader class="header">
    <UHeaderSection>
      <NuxtLink to="/" aria-label="Home">
        <img
          src="/logo.svg"
          width="84"
          height="25"
          alt="Logo"
        />
      </NuxtLink>
    </UHeaderSection>

    <UHeaderSection class="header__right-side">
      <UHeaderNav class="links">
        <UHeaderNavItem>
          <NuxtLink to="/works" class="links__link">
            Works
          </NuxtLink>
        </UHeaderNavItem>

        <UHeaderNavItem>
          <NuxtLink to="/about" class="links__link">
            About
          </NuxtLink>
        </UHeaderNavItem>
      </UHeaderNav>

      <UHeaderActions class="actions">
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
      </UHeaderActions>
    </UHeaderSection>
  </UHeader>
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