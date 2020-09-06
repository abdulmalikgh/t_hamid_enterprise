import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "dynamic-form",
		component: () => import("../views/DynamicForm.vue"),
	},

	/***
	 * Admin route
	 */
	{
		path: "/admin_login",
		name: "admin_login",
		component: () => import("../admin/Login.vue"),
	},
	/** Admin dashboard route */
	{
		path: "/admin",
		name: "admin",
		component: () => import("../admin/AdminDashboard.vue"),
		children: [
			{
				path: "/admin/home",
				name: "admin-home",
				component: () => import("../admin/AdminHome.vue"),
			},
			{
				path: "/admin/category/:id/:title",
				props: true,
				name: "admin-category",
				component: () => import("../admin/CategoryDetails.vue"),
			},
			{
				path: "/admin/categories",
				name: "admin-categories",
				component: () => import("../admin/Categories.vue"),
			},
			{
				path: "/admin/add_product/:id/:title",
				name: "admin-add-product",
				props: true,
				component: () => import("../admin/AddProduct.vue"),
			},
			{
				path: "/products",
				name: "admin-products",
				component: () => import("../admin/Products.vue"),
			},
			{
				path: "/product/:id",
				name: "admin-products",
				props: true,
				component: () => import("../admin/ProductDetail.vue"),
			},
		],
	},
	{
		path: "*",
		component: () => import("../components/404.vue"),
	},
	/***
	 * End of Admin route
	 */
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.path === "/admin") {
		next("/admin/home");
	} else {
		next();
	}
});
export default router;
