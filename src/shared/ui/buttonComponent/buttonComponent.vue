<template>
  <UButton
    v-bind="$attrs"
    class="button"
    :class="{ 'rounded-full': rounded }"
    :icon="icon"
    :size="size"
    :color="color"
    :variant="variant"
  >
    {{ label }}
  </UButton>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'subtle' | 'soft'
  label?: string,
  rounded?: boolean
}>()
</script>