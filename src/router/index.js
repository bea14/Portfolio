import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../components/About.vue";
import Resume from "../components/Resume.vue";
import Portfolio from "../components/Portfolio.vue";
import Contact from "../components/Contact.vue";
import monPortfolio from "../components/monPortfolio.vue";
import reservia from "../components/portfolio/reservia.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
     // import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/monPortfolio",
    name: "monPortfolio",
    component: monPortfolio,
  },
  {
    path: "/reservia.vue",
    name: "reservia",
    component: reservia,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
