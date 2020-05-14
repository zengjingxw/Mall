<template>
  <div id="app">
    <keep-alive exclude="Deatail">
      <router-view />
    </keep-alive>
    <main-tab-bar class="main-bottom-tab"></main-tab-bar>
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
  @import './assets/fonts/supermall/style.css'
</style>

<style lang="less" scoped>
  #app {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
</style>