import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/page/:category/:item",
    name: "PageView",
    component: () => import("@/views/PageView")
  },
  {
    path: "/article/:category/:item/:article",
    name: "ArticleView",
    component: () => import("@/views/PageView")
  },
  {
    path: "/category/:category/:item",
    name: "Category",
    component: () => import("@/views/CategoryView")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
