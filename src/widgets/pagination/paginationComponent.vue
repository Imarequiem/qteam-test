<template>
  <div class="pagination-wrapper">
    <button
      v-if="currentPageModel > 1"
      class="pagination-button"
      @click="currentPageModel--"
    >
      &lt;
    </button>

    <button
      v-for="page in visiblePages"
      class="pagination-button"
      :key="page"
      :class="{ 'active': page === currentPageModel }"
      @click="currentPageModel = page"
    >
      {{ page }}
    </button>

    <button
      v-if="currentPageModel < totalPages"
      class="pagination-button"
      @click="currentPageModel++"
    >
      &gt;
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentPage: number
  totalItems: number
  perPage: number
}>()

const emit = defineEmits<{
  'update:currentPage': [value: number]
}>()

const currentPageModel = computed<number>({
  get: () => props.currentPage,
  set: (value) => emit('update:currentPage', value)
})

const totalPages = computed<number>(() => Math.ceil(props.totalItems / props.perPage))

const visiblePages = computed<number[]>(() => {
  const maxVisible = 5
  const halfVisible = Math.floor(maxVisible / 2)

  let startPage = Math.max(1, currentPageModel.value - halfVisible)
  let endPage = Math.min(totalPages.value, startPage + maxVisible - 1)

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1)
  }

  const pages = []

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
})
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  gap: 8px;
}

.pagination-button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background-color: rgba(243, 243, 243, 1);
  color: #101010;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-button:hover {
  background-color: rgba(232, 232, 232, 1);
}

.pagination-button:active,
.pagination-button.active {
  color: white;
  background-color: rgba(16, 16, 16, 1);
}

.pagination-button[disabled] {
  display: none;
}
</style>
