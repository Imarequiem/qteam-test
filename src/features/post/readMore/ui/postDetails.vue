<template>
  <div class="post-details">
    <h1 class="post-details-title">{{ post.title }}</h1>
    <p class="post-details-body">{{ post.body }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/entities/post/types/post.type';

defineProps<{
  post: Post
}>()
</script>