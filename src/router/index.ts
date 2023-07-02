import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FajrPage from "../components/fajrPage.vue";
import SunrisePage from "../components/sunrisePage.vue";
import DhuhrPage from "../components/dhuhrPage.vue";
import AsrPage from "../components/asrPage.vue";
import MaghribPage from "../components/maghribPage.vue";
import IshaPage from "../components/ishaPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/fajr",
    name: "fajr",
    component: FajrPage,
  },
  {
    path: "/sunrise",
    name: "sunrise",
    component: SunrisePage,
  },
  {
    path: "/dhuhr",
    name: "dhuhr",
    component: DhuhrPage,
  },
  {
    path: "/asr",
    name: "asr",
    component: AsrPage,
  },
  {
    path: "/maghrib",
    name: "maghrib",
    component: MaghribPage,
  },
  {
    path: "/isha",
    name: "isha",
    component: IshaPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
