import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppPlay from "./pages/AppPlay.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/play/:slug?",
      name: "play",
      component: AppPlay,
    },
  ],
});
export { router };
