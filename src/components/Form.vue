<template>
  <ElCard class="form-card">

    <el-select
      v-model="brand"
      placeholder="Select brand"
      @change="filterList"
    >
      <el-option
        v-for="item in filterBrand"
        :key="item.id"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>

    <el-select
      v-model="category"
      placeholder="Select category"
      @change="filterList"
    >
      <el-option
        v-for="item in filterCategory"
        :key="item.id"
        :label="item"
        :value="item"
      >
      </el-option>
    </el-select>

    <el-button
      size="small"
      @click="clearFilter"
    >Clear filter</el-button>
  </ElCard>
</template>

<script>
import { mapGetters } from "vuex";
import { eventBus } from "../main";
export default {
  name: "Form",
  data() {
    return {
      brand: "",
      category: ""
    };
  },
  computed: {
    ...mapGetters(["products"]),
    filterBrand() {
      let result = [];
      this.products.map(str => {
        if (!result.includes(str.brand)) {
          result.push(str.brand);
        }
      });
      return result;
    },
    filterCategory() {
      let result = [];
      this.products.map(str => {
        if (!result.includes(str.category)) {
          result.push(str.category);
        }
      });
      return result;
    }
  },
  methods: {
    clearFilter() {
      this.brand = "";
      this.category = "";
      this.filterList();
    },
    filterList() {
      const payload = { brand: this.brand, category: this.category };
      eventBus.$emit("setFilter", payload);
    }
  }
};
</script>

<style scoped>
.form-card {
  max-width: 800px;
  margin: auto;
}
.select {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>