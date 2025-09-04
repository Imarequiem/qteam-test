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
      />
    </div>

    <pagination-component
      :current-page="postStore.currentPage"
      :total-items="postStore.posts.length"
      :per-page="postStore.pageSize"
      class="pagination"
      @update:current-page="postStore.setCurrentPage"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { usePostStore } from '~/entities/post/store/postStore'

import postComponent from '@/entities/post/postComponent.vue'
import paginationComponent from '@/widgets/pagination/paginationComponent.vue'

const postStore = usePostStore()

onMounted(() => {
  postStore.fetchPosts()
})

// Добавляем watcher для отладки
watch(
  () => postStore.currentPage,
  (newPage) => {
    console.log('Page changed to:', newPage)
    console.log('Current posts:', postStore.paginatedPosts)
  }
)
</script>

<style scoped>
.posts-page {
  min-height: 100vh;
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