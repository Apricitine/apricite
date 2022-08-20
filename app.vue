<template>
  <div>
    <TopNavbar />
    <div class="container">
      <SideNavbar />
    </div>
    <main class="content">
      <NuxtPage />
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/variables.scss";
@import "@/assets/sass/mixins.scss";

.container {
  display: flex;
}

.content {
  margin: 1rem;
}
</style>