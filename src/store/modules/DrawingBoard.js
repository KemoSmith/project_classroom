const state = {
	drawingMode: "Freehand",
	colorMode: "stroke",
	strokeColor: "rgba(000,000,000,1)",
	lineWidth: "24",
	fillColor: "rgba(000,000,000,0)",
};
const actions = {
	setDrawingMode({ commit }, drawingMode) {
		commit("setDrawingMode", drawingMode);
	},
	setColor({ commit }, color) {
		commit("setColor", color);
	},
	setColorMode({ commit }, mode) {
		commit("setColorMode", mode);
	},
};
const mutations = {
	setDrawingMode(state, drawingMode) {
		state.drawingMode = drawingMode;
	},
	setColor(state, color) {
		switch (state.colorMode) {
			case "stroke":
				state.strokeColor = color;
				break;
			case "fill":
				state.fillColor = color;
				break;
			default:
				state.strokeColor = color;
		}
	},
	setColorMode(state, mode) {
		state.colorMode = mode;
	},
};
const getters = {
	drawingMode(state) {
		return state.drawingMode;
	},
	strokeColor(state) {
		return state.strokeColor;
	},
	fillColor(state) {
		return state.fillColor;
	},
	colorMode(state) {
		return state.colorMode;
	},
};

export default {
	state,
	actions,
	mutations,
	getters,
};
