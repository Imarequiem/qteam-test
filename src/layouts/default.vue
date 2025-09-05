<template>
  <div class="post-layout">
    <header-component />

    <main class="flex-1">
      <slot />
    </main>

    <footer-component />
  </div>
</template>

<script setup lang="ts">
import headerComponent from '@/widgets/header/headerComponent.vue'
import FooterComponent from '@/widgets/footer/footerComponent.vue'
</script>

<style scoped>
.post-layout {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}
</style>