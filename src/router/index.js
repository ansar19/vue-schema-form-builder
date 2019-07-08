import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";

import DemoCalc from "../components/DemoCalc.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/demo-calc",
      name: "DemoCalc",
      component: DemoCalc
    }
  ]
});
