import Vue from "vue";
import store from './store'
import App from "./App.vue";
import "./plugins/elements";
import router from './router' 
import productFilter from './plugins/filter/filter'



Vue.config.productionTip = false;
Vue.filter('productFilter', productFilter)

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
