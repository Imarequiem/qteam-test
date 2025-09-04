import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { postApi } from '@/entities/post/api/post-api'

import type { Post } from '@/entities/post/types/post.type'

export const usePostStore = defineStore('post', () => {
  const posts = ref<Post[]>([])
  const post = ref<Post | null>(null)
  const loading = ref<boolean>(false)
  const currentPage = ref<number>(1)
  const pageSize = ref<number>(8)

  const totalPages = computed<number>(() => Math.ceil(posts.value.length / pageSize.value))

  const paginatedPosts = computed<Post[]>(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value

    return posts.value.slice(start, end)
  })

  const fetchPosts = async () => {
    loading.value = true
    try {
      posts.value = await postApi.getAll()
    } finally {
      loading.value = false
    }
  }

  const fetchPost = async (id: string): Promise<void> => {
    loading.value = true
    try {
      post.value = await postApi.getById(id)
    } finally {
      loading.value = false
    }
  }

  const setCurrentPage = (page: number): void => {
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
    fetchPost,
    setCurrentPage
  }
})