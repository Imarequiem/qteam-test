<template>
  <div class="flex flex-col min-h-screen">
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