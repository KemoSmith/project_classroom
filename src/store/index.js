import Vue from "vue";
import Vuex from "vuex";
import DrawingBoard from "./modules/DrawingBoard";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		DrawingBoard,
	},
});
