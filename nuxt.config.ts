import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/sass/base.scss',
    '@/assets/sass/mixins.scss',
    '@/assets/sass/variables.scss'
  ],
  head: {
    title: "Apricite",
    link: [
      { rel: "shortcut icon", type: "image/x-icon", path: "~/assets/images/cas-devs.png" }
    ]
  }
});
