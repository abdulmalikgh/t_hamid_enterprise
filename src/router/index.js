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
  
   /***
   * Admin route
   */
  {
    path: "/admin_login",
    name: "admin_login",
    component: () =>
      import("../admin/Login.vue")
  },
  /** Admin dashboard route */
  {
    path:'/admin',
    name:'admin',
    component:()=> import('../admin/AdminDashboard.vue'),
      children: [
        {
        path:'/admin/home',
        name:'admin-home',
        component:()=> import('../admin/AdminHome.vue'),
        },
        {
          path:'/admin/categories',
          name:'admin-categories',
          component:()=> import('../admin/Categories.vue'),
          },
      ]
  },
/***
   * End of Admin route
   */
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
