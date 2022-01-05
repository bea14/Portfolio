import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import * as rules from "vee-validate/dist/rules";
import { extend, localize } from "vee-validate";
import fr from "vee-validate/dist/locale/fr.json";

localize("fr", fr);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
