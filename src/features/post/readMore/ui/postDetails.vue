<template>
  <div v-if="post" class="post-details">
    <h1 class="post-details-title">
      {{ post.title }}
    </h1>

    <div class="post-details__content">
      <app-image
        class="post-details__content__app-image"
        width="1216"
        height="700"
        :src="post.image"
      />

      <div class="post-details__content__text">
        <span class="post-details__content__text-span">
          About
        </span>

        <p class="post-details__content__text-description">
          {{ post.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostStore } from '@/entities/post/store/postStore'

import appImage from '@/shared/ui/appImage/appImage.vue'

import { createError } from '#imports'

import type { Post } from '@/entities/post/types/post.type'

const route = useRoute()
const postStore = usePostStore()

const post: Post | undefined = postStore.posts.find(post => post.id === route.params.id)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useAsyncData(async () => {
  if (!postStore.posts.length) {
    await postStore.fetchPosts()
  }
})
</script>

<style scoped>
.post-details-title {
  font-size: 84px;
}

.post-details__content,
.post-details {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.post-details__content__app-image {
  align-self: center;
}

.post-details__content__text {
  max-width: 695px;
  align-self: flex-start;
}

.post-details__content__text-span {
  font-size: 16px;
}

.post-details__content__text-description {
  margin-top: 32px;
  font-size: 36px;
}
</style>