<template>
  <div>
    <slot></slot>
    <NuxtLink :to="itemLink">
      <h1>{{ itemName }}</h1>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  itemName: { default: "No Name", required: true },
  itemLink: { default: "/", required: true}
});
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/mixins.scss";
@import "@/assets/sass/variables.scss";
</style>
