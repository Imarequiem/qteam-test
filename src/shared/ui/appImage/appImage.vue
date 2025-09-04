<template>
  <nuxt-img
    v-bind="$attrs"
    :src="currentSrc"
    @error="onError"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  src: string
  fallback?: string
}>()

const currentSrc = ref(props.src)

const onError = () => {
  currentSrc.value = props.fallback || '/noAvailable.svg'
}

watch(() => props.src, (newVal) => {
  currentSrc.value = newVal
})
</script>