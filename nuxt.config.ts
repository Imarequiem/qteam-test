import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-09-03',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  srcDir: 'src/',
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
  imports: {
    dirs: ['src/shared/api', 'src/shared/lib']
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
  css: ['@/app/styles/main.css'],
})