<template>
    <aside class="sidebar" data-sidebar>
      <div class="top-sidebar">
        <a href="#" class="channel-logo"><img src="@/assets/images/apricitine-logo.ico" alt="Channel Logo"></a>
        <div class="hidden-sidebar your-channel">Your channel</div>
        <div class="hidden-sidebar channel-name">Web Dev Simplified</div>
      </div>
      <div class="middle-sidebar">
        <ul class="sidebar-list">
          <SideNavbarItem />
          <SideNavbarItem />
          <SideNavbarItem />
          <SideNavbarItem />
          <SideNavbarItem />
          <SideNavbarItem />
        </ul>
      </div>
    </aside>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@import "@/assets/sass/variables.scss";
@import "@/assets/sass/mixins.scss";

.sidebar {
  flex-shrink: 0;
  overflow: hidden;
  width: 75px;
  border-right: 1px solid $light-gray;
  display: flex;
  flex-direction: column;
  height: calc(100vh - $header-height);
  padding-top: 1rem;
  align-items: center;
  justify-content: stretch;
  transition: width $animation-duration $animation-timing-curve;
  position: sticky;
  left: 0;
  top: $header-height;
}

.sidebar .hidden-sidebar {
  opacity: 0;
  width: 0;
  transition: opacity $animation-duration $animation-timing-curve;
}

.sidebar.open .hidden-sidebar {
  width: 100%;
  height: auto;
  opacity: 1;
}

.sidebar .top-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar .channel-logo {
  display: block;
  width: 30px;
  height: 30px;
  transition: $animation-duration $animation-timing-curve;
}

.sidebar.open .channel-logo {
  width: 90px;
  height: 90px;
}

.sidebar .channel-logo>img {
  width: 100%;
  height: 100%;
}

.sidebar-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}
</style>