import Vue from "vue";
import VueRouter from "vue-router";

const login = () => import("@/views/login/")
Vue.use(VueRouter);

const routes = [
	{
	path:'/login',
	name:'login',
	component:login
	// component:() => import("@/views/login/")
	}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
