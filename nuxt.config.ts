import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "@/assets/sass/mixins.scss",
    "@/assets/sass/variables.scss",
  ],
  head: {
    title: "Apricitine",
    
  }
})
