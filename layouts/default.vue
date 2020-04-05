<template>
  <el-container class="layout-default">
    <el-header>
      <m-header></m-header>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
import mHeader from "@/components/public/header/index.vue";

export default {
  components: {
    mHeader
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
