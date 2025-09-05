<template>
  <div class="post">
    <div class="post-content">
      <app-image
        width="280"
        height="280"
        :src="post.image"
      />

      <div class="post-content__info">
        <p class="post-description">
          {{ post.preview }}
        </p>

        <div class="read-more">
          Read more
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import appImage from '~/shared/ui/appImage/appImage.vue'

import type { Post } from '@/entities/post/types/post.type'

defineProps<{
  post: Post
}>()
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
  transition: transform 0.3s ease;
}

.post:hover {
  transform: translateY(-8px);
}

.post:hover .read-more {
  opacity: 1;
  transform: translateY(0);
}

.post-content {
  flex-grow: 1;
}

.post-description {
  font-size: 20px;
}

.post-content__info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.read-more {
  font-size: 20px;
  font-weight: 500;
  color: var(--main-pink);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}
</style>