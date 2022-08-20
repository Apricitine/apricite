import { defineNuxtConfig } from 'nuxt'
import vue from '@vitejs/plugin-vue'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "@/assets/sass/mixins.scss",
    "@/assets/sass/variables.scss",
  ],
  head: {
    title: "Apricitine",
    link: [
      { rel: "icon", type: "image/x-icon", href: "@/assets/images/apricitine-logo.ico" },
    ]
  },
  vite: {
    plugins: [
      vue({
        reactivityTransform: true
      })
    ],
  }
})
