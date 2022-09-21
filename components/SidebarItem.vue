<template>
  <div>
    <slot></slot>
    <NuxtLink :to="itemLink" class="router">
      <h1>{{ itemName }}</h1>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  itemName: { default: "No Name", required: true },
  itemLink: { default: "/", required: true },
});
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/mixins.scss";
@import "@/assets/sass/variables.scss";

h1 {
  text-align: center;
  font-size: 0.75rem;
}
</style>
