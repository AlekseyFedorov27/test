<template>
  <ElCard class="table">

    <el-table
      ref="singleTable"
      :data="products | productFilter(brand, category)"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column
        property="id"
        label="id"
        width="50"
      >
      </el-table-column>
      <el-table-column
        type="id"
        width="25%"
      >
      </el-table-column>
      <el-table-column
        property="name"
        label="Name"
        style="width: 25%"
      >
      </el-table-column>
      <el-table-column
        property="category"
        label="Category"
        style="width: 25%"
      >
      </el-table-column>
      <el-table-column
        property="brand"
        label="Brand"
        style="width: 25%"
      >
      </el-table-column>

    </el-table>

    <el-alert
      title="Всего на странице отображено: "
      type="info"
      center
      :closable="false"
    > {{this.listLength + ' ' + productLetter}}
    </el-alert>

  </ElCard>
</template>

<script>
import { mapGetters } from "vuex";
import { eventBus } from "../main";
export default {
  data() {
    return {
      category: "",
      brand: "",
      payload: "",
      listLength: null
    };
  },
  created() {
    eventBus.$on("setFilter", payload => {
      this.brand = payload.brand;
      this.category = payload.category;
    });
  },
  mounted() {
    this.getLengthListProducts();
  },
  updated() {
    this.getLengthListProducts();
  },
  methods: {
    handleCurrentChange(val) {
      this.$router.push(`/products/${val.id}`);
      this.currentRow = val.id;
    },
    getLengthListProducts() {
      this.listLength = Array.from(
        document.getElementsByClassName("el-table__row")
      ).length;
    }
  },
  computed: {
    ...mapGetters(["products"]),
    productLetter() {
      let str;
      if (this.listLength % 10 === 5) {
        str = " продукт";
      }
      if (this.listLength % 100 < 20 && this.listLength % 100 > 4) {
        str = " продукта";
      }
      if (this.listLength % 10 < 5) {
        str = " продуктов";
      }
      return str;
    }
  }
};
</script>
<style scoped>
.table {
  max-width: 800px;
  margin: auto;
}
</style>