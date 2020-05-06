<template>
  <div id="app">
    <div class="wrap">
      <keep-alive>
        <router-view />
      </keep-alive>
      <main-tab-bar></main-tab-bar>
    </div>
  </div>
</template>

<script>
  import MainTabBar from "components/content/maintabat/MainTabbar";
  export default {
    name: "App",
    components: {
      MainTabBar
    }
  };
</script>

<style>
  @import "./assets/css/base.css";
</style>

<style lang="less" scoped>
  #app {
    height: 100%;
    width: 100%;
    overflow: auto;

  }
</style>