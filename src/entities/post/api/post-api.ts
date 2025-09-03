import { $api } from '@/shared/api/instance'

import type { Post } from '@/entities/post/types/post.type'

export const postApi = {
  getAll: () => $api<Post[]>('posts'),
  getById: (id: string) => $api<Post>(`posts/${id}`)
}