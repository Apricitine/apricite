<template>
  <aside class="sidebar active">
    <group>
      <SidebarItem
        v-for="items in sidebarItemInfo"
        :itemName="items.sidebarItemName"
        :itemLink="items.sidebarItemLink"
      ></SidebarItem>
    </group>
  </aside>
</template>

<script lang="ts" setup>
/* type definition */
interface SidebarItemInfoIndice {
  sidebarItemName: string;
  sidebarItemLink: string;
  
}
/* variable declarations */
let sidebarItemInfo: Array<SidebarItemInfoIndice> = [
  { sidebarItemName: "Home", sidebarItemLink: "/" },
  { sidebarItemName: "About", sidebarItemLink: "about" },
  { sidebarItemName: "Experience", sidebarItemLink: "experience" },
  { sidebarItemName: "Projects", sidebarItemLink: "projects" },
  { sidebarItemName: "Contact", sidebarItemLink: "contact" },
];
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/mixins.scss";
@import "@/assets/sass/variables.scss";

aside.sidebar {
  background: $accent-dark2;
  box-shadow: 1px 0px 10px $accent-dark1;
  width: $sidebar-width;
  min-width: $gui-min;
  height: 100%;
  position: fixed;
  border-top: 0.75pt solid $accent-dark2;
  display: grid;
  padding: 1%;
}
</style>
