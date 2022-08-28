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
  background: $accent-dark1;
  box-shadow: 1px 0px 10px $accent-dark1;
  width: $sidebar-width;
  min-width: $gui-min;
  height: 100%;
  position: fixed;
}
</style>