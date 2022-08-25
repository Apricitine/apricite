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
section.top-nav-container {
  height: 10vh;
}

section.sidebar-container {}
</style>
