<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <m-header></m-header>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer height="100%">
      <m-footer></m-footer>
    </el-footer>
  </el-container>
</template>
<script>
import mHeader from "@/components/public/header/index.vue";
import mFooter from "@/components/public/footer/index.vue";

export default {
  components: {
    mHeader,
    mFooter
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
