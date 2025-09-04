<template>
  <div class="post-page">
    <post-details />
  </div>
</template>

<script setup lang="ts">
import postDetails from '@/features/post/readMore/ui/postDetails.vue'
</script>

<style scoped>
.post-page {
  min-height: 100vh;
  align-items: center;
  padding: 120px 112px 140px 112px;
  background-color: var(--main-white);
}
</style>