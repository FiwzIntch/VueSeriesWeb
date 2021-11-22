import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "koreaseries",
    component: () => import("@/views/KoreaSeries.vue"),
  },
  {
    path: "/korea",
    name: "koreaseries",
    component: () => import("@/views/KoreaSeries.vue"),
  },
  {
    path: "/chinese",
    name: "chineseseries",
    component: () => import("@/views/ChineseSeries.vue"),
  },
  {
    path: "/thai",
    name: "thaiseries",
    component: () => import("@/views/ThaiSeries.vue"),
  },
  {
    path: "/western",
    name: "westernseries",
    component: () => import("@/views/WesternSeries.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("@/views/Detail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
