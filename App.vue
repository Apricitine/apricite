<template>
  <div>
    <TopNavbar />
    <SideNavbar />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
body {
  @import "@/assets/sass/base.scss";
  
  body {
    margin: 0;
  }
}
</style>