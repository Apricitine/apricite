<template>
  <div>
    <li class="sidebar-list-item active">
      <a href="" class="sidebar-link">
        <svg class="sidebar-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
          <g :path="navbarIcon"></g>
        </svg>
        <div class="hidden-sidebar">{{ navbarName }}</div>
      </a>
    </li>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  navbarIcon: {
    type: string
  },
  navbarName: {
    type: string
  }
}

const props = defineProps<Props>();
</script>

<style lang="scss">
@import "@/assets/sass/variables.scss";
@import "@/assets/sass/mixins.scss";

.sidebar-list-item {
  position: relative;
  width: 100%;
  fill: $light-gray;
}

.sidebar-list-item.active {
  fill: $accent-color;
  background-color: $lightest-gray;
}

.sidebar-list-item:hover {
  background-color: $lightest-gray;
}

.sidebar-list-item.active::before {
  content: "";
  background-color: $accent-color;
  height: 100%;
  left: 0;
  width: 3px;
  position: absolute;
}

.sidebar-link {
  display: flex;
  width: 100%;
  padding: .5rem 0;
  color: $light-gray;
  text-decoration: none;
  align-items: center;
  padding-left: 25px;
}
</style>