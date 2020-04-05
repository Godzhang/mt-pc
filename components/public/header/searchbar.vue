<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            @focus="focus()"
            @blur="blur()"
            @input="input(...arguments)"
            placeholder="搜索商家或地点"
          ></el-input>
          <!-- 输入框即时获取功能调研 -->
          <!-- <input
            v-model="search"
            @focus="focus()"
            @blur="blur()"
            @input="input(...arguments)"
            placeholder="搜索商家或地点"
          />-->
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="item in hotPlace" :key="item">{{ item }}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="item in searchList" :key="item">{{ item }}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="moive">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿 / 公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
          <!-- <li>
              <nuxt-link to="/" class="">美团公益</nuxt-link>
          </li>-->
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund"></i>
            <p class="text">随时退</p>
          </li>
          <li>
            <i class="single"></i>
            <p class="text">不满意免单</p>
          </li>
          <li>
            <i class="overdue"></i>
            <p class="text">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hotPlace: [1],
      searchList: [2]
    };
  },
  mounted() {},
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search.trim();
    },
    isSearchList() {
      return this.isFocus && this.search.trim();
    }
  },
  watch: {},
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 300);
    },
    input(search) {
      console.log(search);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>