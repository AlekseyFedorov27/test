<template>
  <ElCard class="form-card">

    <el-select
      v-model="brand"
      placeholder="Select brand"
      @change="filterList"
    >
      <el-option
        v-for="item in products"
        :key="item.id"
        :label="item.brand"
        :value="item.brand"
      >
      </el-option>
    </el-select>

    <el-select
      v-model="category"
      placeholder="Select category"
      @change="filterList"
    >
      <el-option
        v-for="item in products"
        :key="item.id"
        :label="item.category"
        :value="item.category"
      >
      </el-option>
    </el-select>

    <el-button size="small" @click="clearFilter">Clear filter</el-button>
  </ElCard>
</template>

<script>
import { mapGetters } from "vuex";
import {eventBus} from '../main'
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
  },
  methods: {
    clearFilter(){
      this.brand=""
      this.category=""
      this.filterList()
    },
    filterList(){
      
      const payload={brand:this.brand, category:this.category}
      eventBus.$emit('setFilter', payload)
      
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