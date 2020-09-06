<template>
	<div class="nav-bar-container-custom">
		<v-system-bar dense height="30" class="pr-0 dragable" dark color="blue-grey darken-4">
			<v-icon>mdi-star</v-icon>
			<v-toolbar-items class="none-dragable ml-2">
				<v-btn icon class="text-decoration-none m-0" :to="{name: 'Home'}">
					<v-icon class="ml-1">mdi-home</v-icon>
				</v-btn>
				<v-btn text small class="text-decoration-none" :to="{name: 'Teach'}">Classroom</v-btn>
				<v-btn text small class="text-decoration-none">Account</v-btn>
			</v-toolbar-items>
			<v-spacer class="draggable blue"></v-spacer>
			<small class="mr-3 my-0 font-weight-normal">TrLive</small>
			<v-spacer class="draggable blue"></v-spacer>
			<small class="mr-3 my-0 font-weight-normal">Signed in as John Doe</small>
			<v-avatar color="blue-grey darken-1" size="20">J</v-avatar>
			<v-divider class="m-0 mx-3 blue-grey darken-1" vertical></v-divider>
			<v-toolbar-items class="none-dragable">
				<v-btn icon small elevation="0" @click="minimize()" class="p-0 m-0">
					<v-icon color="blue-grey lighten-5" class="ml-1">mdi-window-minimize</v-icon>
				</v-btn>
				<v-btn icon small elevation="0" @click="maximize()" v-if="!isMaximized" class="p-0 m-0">
					<v-icon color="blue-grey lighten-5" class="ml-1">mdi-window-maximize</v-icon>
				</v-btn>
				<v-btn icon small elevation="0" @click="unMaximize()" v-if="isMaximized" class="p-0 m-0">
					<v-icon color="blue-grey lighten-5" class="ml-1">mdi-window-restore</v-icon>
				</v-btn>
				<v-btn icon small elevation="0" @click="quit()" class="p-0 m-0">
					<v-icon class="ml-1" color="red">mdi-window-close</v-icon>
				</v-btn>
			</v-toolbar-items>
		</v-system-bar>
	</div>
</template>

<script>
const { app } = window.require("electron").remote;
const BrowserWindow = window.require("electron").remote.getCurrentWindow();
import { mapGetters } from "vuex";
export default {
	name: "NavBar",
	data() {
		return {
			isMaximized: false,
		};
	},
	methods: {
		quit() {
			app.quit();
		},
		maximize() {
			BrowserWindow.maximize();
		},
		unMaximize() {
			BrowserWindow.unmaximize();
		},
		minimize() {
			BrowserWindow.minimize();
		},
	},
	mounted() {
		BrowserWindow.on("maximize", () => {
			this.isMaximized = true;
		});
		BrowserWindow.on("unmaximize", () => {
			this.isMaximized = false;
		});
	},
	computed: {
		...mapGetters(["selectedTheme"]),
	},
};
</script>

<style>
.nav-bar-container-custom {
	height: 30px;
}
.dragable {
	-webkit-app-region: drag;
}
.none-dragable {
	-webkit-app-region: none;
}
</style>