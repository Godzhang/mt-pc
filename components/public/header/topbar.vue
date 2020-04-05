<template>
  <el-row :gutter="0" class="m-topbar">
    <el-col :span="5">
      <geo />
    </el-col>
    <el-col :span="5">
      <user />
    </el-col>
    <el-col :span="14">
      <nav-bar></nav-bar>
    </el-col>
  </el-row>
</template>
<script>
import Geo from "./geo";
import User from "./user";
import NavBar from "./nav";

export default {
  components: {
    Geo,
    User,
    NavBar
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>