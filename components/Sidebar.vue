<template>
  <aside class="sidebar active">
    <group>
      <SidebarItem
        :itemName="sidebarItemInfo.sidebarItemNames[0]"
        :itemLink="sidebarItemInfo.sidebarItemLinks[0]"
      ></SidebarItem>
      <SidebarItem
        :itemName="sidebarItemInfo.sidebarItemNames[1]"
        :itemLink="sidebarItemInfo.sidebarItemLinks[1]"
      ></SidebarItem>
    </group>
  </aside>
</template>

<script lang="ts" setup>
let sidebarItemInfo: {
  sidebarItemNames: Array<string>;
  sidebarItemLinks: Array<string>;
} = {
  sidebarItemNames: ["Home", "About"],
  sidebarItemLinks: ["/", "about"],
};
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
  transition: width 0.5s;
  display: grid;
}
</style>
