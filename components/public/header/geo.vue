<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>
    {{ $store.state.geo.position.city }}
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>[1 2 3]
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>
