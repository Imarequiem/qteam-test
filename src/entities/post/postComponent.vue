<template>
  <div
    class="post"
    :class="{ 'post-hovered': isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="post-content">
      <h2 class="post-title">
        {{ post.title }}
      </h2>

      <p class="post-description">
        {{ post.body }}
      </p>
    </div>

    <div class="read-more" :class="{ 'read-more-visible': isHovered }">
      Read more
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { Post } from '@/entities/post/types/post.type'

defineProps<{
  post: Post
}>()

const isHovered = ref(false)
</script>

<style scoped>
.post {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: transform 0.3s ease;
}

.post-hovered {
  transform: translateY(-8px);
}

.post-content {
  flex-grow: 1;
}

.post-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #101010;
}

.post-description {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

.read-more {
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;
  color: #101010;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.read-more-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>