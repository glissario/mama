import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/OverviewView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
      {
        path: "/offer",
        name: "offer",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/OfferView.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

/*
<router-link :to="{ name: 'home' }">Home</router-link>
<router-link :to="{ name: 'about' }">Über mich</router-link>
<router-link :to="{ name: 'offer' }">Leistungen</router-link>
<router-link :to="{ name: 'contact' }">Kontakt</router-link>
*/
