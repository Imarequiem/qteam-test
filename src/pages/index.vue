<template>
  <div class="posts-page">
    <h1 class="posts-page-title">
      Articles
    </h1>

    <div class="posts-grid">
      <post-component
        v-for="post in postStore.paginatedPosts"
        :key="post.id"
        :post="post"
        @click="navigateTo(`/post/${post.id}`)"
      />
    </div>

    <pagination-component
      class="pagination"
      :current-page="postStore.currentPage"
      :total-items="postStore.posts.length"
      :per-page="postStore.pageSize"
      @update:current-page="postStore.setCurrentPage"
    />
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { usePostStore } from '@/entities/post/store/postStore'

import postComponent from '@/features/post/postComponent.vue'
import paginationComponent from '@/widgets/pagination/paginationComponent.vue'

import { useScrollToTop } from '@/shared/lib/useScrollToTop'

const postStore = usePostStore()

const { scrollToTop } = useScrollToTop({ top: 250, behavior: 'auto' })

watch(() => postStore.currentPage, () => scrollToTop('#posts'))

onMounted(() => postStore.fetchPosts())
</script>

<style scoped>
.posts-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 59px;
  padding: 120px 112px 140px 112px;
  background-color: var(--main-white);
}

.posts-page-title {
  font-size: 84px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 32px;
  margin-bottom: 32px;
}

.pagination {
  margin-top: 40px;
}
</style>