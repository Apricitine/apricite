<template>
  <div>
    <slot></slot>
    <h1>{{ itemName }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  itemName: { default: "No Name", required: true },
});
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/mixins.scss";
@import "@/assets/sass/variables.scss";
</style>
