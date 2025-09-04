<template>
  <nuxt-img
    v-bind="$attrs"
    :src="currentSrc"
    @error="onError"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Ref } from 'vue'

const props = defineProps<{
  src: string
  fallback?: string
}>()

const currentSrc: Ref<string> = ref(props.src)

const onError = (): void => {
  currentSrc.value = props.fallback || '/noAvailable.svg'
}

watch(() => props.src, (newVal: string) => {
  currentSrc.value = newVal
})
</script>