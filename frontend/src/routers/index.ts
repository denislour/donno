import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AdminLayout from "../layouts/Admin.vue";
import Home from "../views/Home.vue";
import Product from "../views/products/Product.vue";
import DefaultLayout from "../layouts/Default.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "/admin",
        component: Home,
        meta: {
          model: {
            name: "Ahihi",
          },
        },
      },
      {
        path: "/admin/product",
        component: Product,
      },
    ],
  },
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
