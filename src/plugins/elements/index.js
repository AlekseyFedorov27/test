import Vue from "vue";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import "element-ui/packages/theme-chalk/lib/index.css";
import ElementUI from 'element-ui'


locale.use(lang);

Vue.use(ElementUI, { locale })
