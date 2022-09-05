import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  googleFonts: {
    families: {
      Nunito: true,
    },
    preconnect: true,
  },
  modules: ["@nuxtjs/google-fonts"],
  head: {
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "~/public/images/cas-devs.png",
      },
    ],
  },
});
