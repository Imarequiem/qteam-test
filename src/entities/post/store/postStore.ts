import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Post } from '@/entities/post/types/post.type'
import { postApi } from '@/entities/post/api/post-api'

export const usePostStore = defineStore('post', () => {
  const posts = ref<Post[]>([])
  const loading = ref(false)
  const currentPage = ref(1)
  const pageSize = ref(8)

  const totalPages = computed(() => Math.ceil(posts.value.length / pageSize.value))

  const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return posts.value.slice(start, end)
  })

  async function fetchPosts() {
    loading.value = true
    try {
      posts.value = await postApi.getAll()
    } finally {
      loading.value = false
    }
  }

  function setCurrentPage(page: number) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return {
    posts,
    loading,
    currentPage,
    pageSize,
    paginatedPosts,
    totalPages,
    fetchPosts,
    setCurrentPage
  }
})