import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dynamic-form",
    component: () =>
      import("../views/DynamicForm.vue")
  },
  {
    path: "/admin_login",
    name: "admin_login",
    component: () =>
      import("../admin/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from , next)=> {
  if(to.path === '/admin') {
    next('/admin/home')
  } else {
    next()
  }
})
export default router;
