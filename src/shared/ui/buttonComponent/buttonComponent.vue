<template>
  <u-button
    v-bind="$attrs"
    class="button"
    :class="{ 'rounded-full': rounded }"
    :icon="icon"
    :size="size"
    :color="color"
    :variant="variant"
  >
    {{ label }}
  </u-button>
</template>

<script setup lang="ts">
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link' | 'subtle' | 'soft'
type ButtonColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'

defineProps<{
  icon?: string
  size?: ButtonSize
  color?: ButtonColor
  variant?: ButtonVariant
  label?: string
  rounded?: boolean
}>()
</script>