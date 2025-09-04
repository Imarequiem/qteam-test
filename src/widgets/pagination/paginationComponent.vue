<template>
  <div class="pagination-wrapper">
    <button-component
      class="pagination-button"
      rounded
      :class="{ hidden: currentPageModel <= 1 }"
      :label="'<'"
      :size="'lg'"
      :variant="'outline'"
      :ui="{ base: 'text-black ring-0' }"
      @click="currentPageModel--"
    />

    <button-component
      v-for="page in visiblePages"
      :key="page"
      class="button-page"
      :class="{ active: page === currentPageModel }"
      :label="String(page)"
      :size="'lg'"
      :ui="{ base: 'flex items-center justify-center text-md' }"
      @click="currentPageModel = page"
    />

    <button-component
      class="pagination-button"
      rounded
      :class="{ hidden: currentPageModel >= totalPages }"
      :label="'>'"
      :size="'lg'"
      :variant="'outline'"
      :ui="{ base: 'text-black ring-0' }"
      @click="currentPageModel++"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import buttonComponent from '@/shared/ui/buttonComponent/buttonComponent.vue'

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
  set: (value: number) => emit('update:currentPage', value)
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
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1) !important;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-button:hover {
  background-color: rgba(232, 232, 232, 1) !important;
}

.pagination-button.hidden {
  opacity: 0;
  pointer-events: none;
}

.pagination-button,
:deep(.button-page) {
  width: 44px;
  height: 44px;
}

:deep(.button-page) {
  background-color: rgba(243, 243, 243, 1) !important;
  color: #101010 !important;
}

:deep(.button-page:hover) {
  background-color: rgba(232, 232, 232, 1) !important;
}

:deep(.button-page.active) {
  color: white !important;
  background-color: rgba(16, 16, 16, 1) !important;
}
</style>
