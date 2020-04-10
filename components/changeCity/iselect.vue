<template>
  <div class="m-select">
    <span class="name">按省份选择:</span>
    <el-select v-model="province" placeholder="省份">
      <el-option
        v-for="item in provinceOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-select v-model="city" placeholder="城市" :disabled="!cityOptions.length ">
      <el-option
        v-for="item in cityOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <span class="name">直接搜索:</span>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>
<script>
import debounce from "lodash/debounce";

export default {
  data() {
    return {
      province: "",
      provinceOptions: [],
      city: "",
      cityOptions: [],
      input: "",
      cities: []
    };
  },
  computed: {},
  watch: {
    async province(p) {
      const {
        status,
        data: { city }
      } = await this.$axios.get(`/geo/province/${p}`);
      if (status === 200) {
        this.cityOptions = city.map(item => {
          return {
            value: item.id,
            label: item.name
          };
        });
        this.city = "";
      }
    }
  },
  async mounted() {
    const {
      status,
      data: { province }
    } = await this.$axios.get("/geo/province");
    if (status === 200) {
      this.provinceOptions = province.map(item => {
        return {
          value: item.id,
          label: item.name
        };
      });
    }
  },
  methods: {
    querySearchAsync: debounce(async function(queryString, cb) {
      if (this.cities.length) {
        cb(this.cities.filter(item => item.value.indexOf(queryString) > -1));
      } else {
        const {
          status,
          data: { city }
        } = await this.$axios.get("/geo/city");
        if (status === 200) {
          this.cities = city.map(item => {
            return {
              value: item.name
            };
          });
          cb(this.cities.filter(item => item.value.indexOf(queryString) > -1));
        } else {
          cb([]);
        }
      }
    }, 300),
    handleSelect(item) {
      console.log(item);
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/changeCity/iselect.scss";
</style>