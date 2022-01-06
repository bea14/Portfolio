import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Challenges from "../components/Challenges.vue";
import monPortfolio from "../components/monPortfolio.vue";
import bapadoz from "../components/portfolio/bapadoz.vue";
import devdurable from "../components/portfolio/devdurable.vue";
import mybikewix from "../components/portfolio/mybikewix.vue";
import mybikeshopify from "../components/portfolio/mybikeshopify.vue";
import reservia from "../components/portfolio/reservia.vue";
import ohmyfood from "../components/portfolio/ohmyfood.vue";
import piiquante from "../components/portfolio/piiquante.vue";
import orinoco from "../components/portfolio/orinoco.vue";
import groupomania from "../components/portfolio/groupomania.vue";
import pochetteCD from "../components/portfolio/pochetteCD.vue";
import pochetteCD2 from "../components/portfolio/pochetteCD2.vue";
import mentionslegales from "../components/mentionslegales.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Challenges",
    name: "Challenges",
    component: Challenges,
  },
  {
    path: "/monPortfolio",
    name: "monPortfolio",
    component: monPortfolio,
  },
  {
    path: "/monPortfolio/:title",
    component: bapadoz,
    name: "bapadoz",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: devdurable,
    name: "devdurable",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: mybikewix,
    name: "mybikewix",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: mybikeshopify,
    name: "mybikeshopify",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: reservia,
    name: "reservia",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: ohmyfood,
    name: "ohmyfood",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: piiquante,
    name: "piiquante",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: orinoco,
    name: "orinoco",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: groupomania,
    name: "groupomania",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: pochetteCD,
    name: "pochetteCD",
    props: true,
  },
  {
    path: "/monPortfolio/:title",
    component: pochetteCD2,
    name: "pochetteCD2",
    props: true,
  },
  {
    path: "/mentionslegales",
    component: mentionslegales,
    name: "mentionslegales",
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash, offset: { x: 0, y: 0 }, behavior: "smooth" };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

export default router;
