<template>
  <nav class="overhead-nav">
    <button class="menu-icon-btn" data-menu-icon-btn @click="toggleOpen()">
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="menu-icon">
        <g>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </g>
      </svg>
    </button>
  </nav>
</template>

<script lang="ts" setup>

function toggleOpen() {
  this.isOpen = !this.isOpen;
}
</script>

<style lang="scss">
@import "@/assets/sass/variables.scss";
@import "@/assets/sass/mixins.scss";

nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .4);
  padding: 0 .5rem;
  height: $header-height;
}

.menu-icon-btn {
  background: none;
  border: none;
  padding: 0;
}

.menu-icon {
  width: 25px;
  height: 25px;
  fill: $medium-gray;
  cursor: pointer;
}

.menu-icon:hover {
  fill: $dark-gray;
}
</style>