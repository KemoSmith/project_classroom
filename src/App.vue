<template>
	<v-app>
		<system-bar></system-bar>
		<v-divider class="m-0 blue-grey lighten-3"></v-divider>
		<router-view></router-view>
		<v-divider class="m-0 blue-grey lighten-3"></v-divider>
		<control-bar></control-bar>
	</v-app>
</template>

<script>
import SystemBar from "./components/SystemBar";
import ControlBar from "./components/ControlBar";

export default {
	name: "App",

	components: {
		SystemBar,
		ControlBar,
	},

	data: () => ({
		//
	}),
};
</script>
