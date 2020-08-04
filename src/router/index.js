import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dynamic-form",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DynamicForm.vue")
  },
  {
    path: "/admin_login",
    name: "admin_login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../admin/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
