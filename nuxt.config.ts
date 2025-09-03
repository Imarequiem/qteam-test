import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-09-03',
  srcDir: 'src/',
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
  imports: {
    dirs: ['src/shared/api', 'src/shared/lib']
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/ui'],
  css: ['@/app/styles/main.css'],
})