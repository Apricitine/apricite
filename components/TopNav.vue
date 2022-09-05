<template>
  <nav class="top-navbar">
    <input
      type="text"
      name="search-bar"
      id="search-bar"
      placeholder="Search this site"
    />
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/mixins.scss";
@import "@/assets/sass/variables.scss";

nav.top-navbar {
  height: 10%;
  min-height: $gui-min;
  background: $accent-dark2;
  position: fixed;
  width: 100%;
  box-shadow: 0px 1px 10px $accent-dark1;
  display: grid;
  align-items: center;
}

input#search-bar {
  width: 20%;
  height: 40%;
  float: left;
}
</style>
