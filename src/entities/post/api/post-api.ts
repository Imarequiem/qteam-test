import { useApi } from '@/shared/api/instance'
import type { Post } from '@/entities/post/types/post.type'

export const postApi = {
  getAll: () => useApi()<Post[]>('/posts'),
  getById: (id: string) => useApi()<Post>(`/posts/${id}`)
}