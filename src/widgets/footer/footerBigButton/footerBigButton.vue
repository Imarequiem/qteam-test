<template>
  <div class="footer-big-button">
    <button-component
      class="text-white"
      rounded
      :label="'Go'"
      :ui="{ base: 'w-[358px] h-[358px] pb-17 flex items-center justify-center text-xl' }"
      :style="{ backgroundColor: '#111' }"
    />
  </div>
</template>

<script setup lang="ts">
import buttonComponent from '@/shared/ui/buttonComponent/buttonComponent.vue'
</script>