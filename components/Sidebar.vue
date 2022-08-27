<template>
  <aside class="sidebar">

  </aside>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/mixins.scss";
@import "@/assets/sass/variables.scss";


aside.sidebar {
  background: linear-gradient(red, green);
  width: $sidebar-width;
  height: 100%;
  position: fixed;
}
</style>