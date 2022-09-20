<template>
  <div>
    <div class="navigation">
      <section class="top-nav-container">
        <TopNav />
      </section>
      <section class="sidebar-container">
        <Sidebar />
      </section>
    </div>
    <main class="content">
      <NuxtPage></NuxtPage>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { onKeyStroke } from "@vueuse/core";

/* the secret passphrase is built into the site
 * it should be an Array generic with a type of string
 * the result is an array with each index containing letters
 * that spell out Aprictine
*/
const secritTyper: Array<string> = "Apricitine".split("");

for (let typedLetter in secritTyper) {
  onKeyStroke(secritTyper, e => e.preventDefault());

}

useHead({
  titleTemplate: (titleChunk: string) => {
    return titleChunk ? `${titleChunk} | Apricitine` : "Apricitine";
  },
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "The Apricitine Homepage." }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/mixins.scss";
@import "@/assets/sass/variables.scss";

section.top-nav-container {
  height: 10vh;
  min-height: 60px;
  z-index: 1;
}

section.sidebar-container {
  z-index: 1;
}

main.content {
  height: 100%;
}
</style>
