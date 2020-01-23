<template>
  <el-card
    class="form-card"
    v-if="product"
  >
    <div
      slot="header"
      class="clearfix flex"
    >
      <h3>Name: {{product.name}}</h3>
      <el-button
        type="primary"
        class="prevbtn"
        @click="goToHomePage"
      >
        <i class="el-icon-arrow-left el-icon-left"></i>
        Home Page
      </el-button>
    </div>
    <div class="item">
      Category: {{product.category}}
    </div>
    <div class="item">
      Brand: {{product.brand}}
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: String
  },
  data: () => ({
    product: null
  }),
  created() {
    const [{ ...found }] = this.$store.getters.getProductByID(this.id);
    this.product = found;
  },
  methods: {
    goToHomePage() {
      this.$router.push("/");
    }
  },
  beforeDestroy(){
    this.product = null
  }
};
</script>
<style>
.form-card {
  max-width: 800px;
  margin: auto;
}
.text {
  font-size: 14px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.prevbtn {
  height: 40px;
}
.item {
  margin-bottom: 22px;
  text-align: left;
}
</style>
