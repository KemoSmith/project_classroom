import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Classroom from "../views/Classroom.vue";
import Teach from "../views/Teach.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/classroom",
		name: "Classroom",
		component: Classroom,
		children: [
			{
				path: "teach",
				name: "Teach",
				component: Teach,
			},
		],
	},
];

const router = new VueRouter({
	routes,
});

export default router;
