<template>
  <div class="m-menu" @mouseleave="mouseleave">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menu"
        :key="`${item.type}-${index}`"
        @mouseenter="mouseenter(item.type)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind">
      <template v-for="(item, index) in curDetail">
        <h4 :key="`${item.title}-${index}`">{{ item.title }}</h4>
        <span v-for="(v, vi) in item.child" :key="`${v}-${vi}`">{{ v }}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: ""
    };
  },
  computed: {
    menu() {
      return this.$store.state.home.menu;
    },
    curDetail() {
      if (!this.kind) return [];
      return this.menu.filter(item => item.type === this.kind)[0].child;
    }
  },
  methods: {
    mouseenter(type) {
      this.kind = type;
    },
    mouseleave() {
      setTimeout(() => {
        this.kind = "";
      }, 150);
    }
  }
};
</script>
<style lang="scss" scoped></style>
