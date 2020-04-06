<template>
  <div class="m-menu" @mouseleave="mouseleave">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="item in menu"
        :key="item.type"
        @mouseenter="mouseenter(item.type)"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind">
      <template v-for="item in curDetail">
        <h4 :key="item.title">{{ item.title }}</h4>
        <span v-for="v in item.child" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["代金券", "甜点饮品"],
            },
          ],
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "外卖",
              child: ["美团外卖"],
            },
          ],
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            {
              title: "酒店星级",
              child: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"],
            },
          ],
        },
      ],
    };
  },
  computed: {
    curDetail() {
      if (!this.kind) return [];
      return this.menu.filter((item) => item.type === this.kind)[0].child;
    },
  },
  watch: {},
  mounted() {},
  methods: {
    mouseenter(type) {
      this.kind = type;
    },
    mouseleave() {
      setTimeout(() => {
        this.kind = "";
      }, 150);
    },
  },
};
</script>
<style lang="scss" scoped></style>
