import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/sass/base.scss',
    '@/assets/sass/mixins.scss',
    '@/assets/sass/variables.scss'
  ],
  head: {
    title: 'Apricite',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '~/assets/images/cas-devs.png' }
    ]
  }
})
