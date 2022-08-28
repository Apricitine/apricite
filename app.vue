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
      <NuxtPage>

      </NuxtPage>
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/mixins.scss";
@import "@/assets/sass/variables.scss";

section.top-nav-container {
  height: 10vh;
  min-height: 60px;
}

main.content {
  height: 100%;
}
</style>
