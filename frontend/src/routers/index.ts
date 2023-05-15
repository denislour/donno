import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Admin from "../layouts/Admin.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import EditProduct from "../views/EditProduct.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Admin,
    children: [
      {
        path: "/",
        component: Home,
        meta: {
          model: {
            name: "Ahihi",
          },
        },
      },
      {
        path: "/product",
        component: Product,
      },
      {
        path: "/product/:id",
        component: EditProduct,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
