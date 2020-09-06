<template>
	<div class="d-flex align-items-center">
		<small class="mr-1">Colors:</small>
		<v-btn elevation="0" x-small fab tile :color="colorMode == 'fill' ? 'blue-grey lighten-3' : 'transparent'">
			<v-icon size="24" :color="fillColor" class="ml-1" @click="setColorMode('fill')">mdi-square</v-icon>
		</v-btn>
		<v-btn elevation="0" x-small fab tile :color="colorMode == 'stroke' ? 'blue-grey lighten-3' : 'transparent'">
			<v-icon size="24" :color="strokeColor" class="ml-1" @click="setColorMode('stroke')">mdi-square-outline</v-icon>
		</v-btn>
		<v-divider vertical class="my-1 mx-3"></v-divider>
		<v-btn small icon tile color="blue">
			<v-icon color="black">mdi-palette</v-icon>
		</v-btn>
		<v-divider vertical class="my-1 mx-3"></v-divider>
		<v-chip-group style="width: 450px;" class="m-0" dark>
			<v-btn small icon tile v-for="(color, i) in colors" :key="i" :color="color">
				<v-icon :color="color" @click="setColor(color)" class="ml-1">mdi-square</v-icon>
			</v-btn>
		</v-chip-group>
		<v-divider vertical class="my-1 mx-3"></v-divider>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	data: () => ({
		colors: [
			"rgba(0, 0, 0, 1)",
			"rgba(121, 85, 72, 1)",
			"rgba(255, 255, 255, 1)",
			"rgba(158, 158, 158, 1)",
			"rgba(96, 125, 139, 1)",
			"rgba(33, 150, 243, 1)",
			"rgba(3, 169, 244, 1)",
			"rgba(0, 188, 212, 1)",
			"rgba(0, 150, 136, 1)",
			"rgba(76, 175, 80, 1)",
			"rgba(139, 195, 74, 1)",
			"rgba(118, 255, 3, 1)",
			"rgba(205, 220, 57, 1)",
			"rgba(255, 235, 59, 1)",
			"rgba(255, 193, 7, 1)",
			"rgba(255, 152, 0, 1)",
			"rgba(255, 87, 34, 1)",
			"rgba(244, 67, 54, 1)",
			"rgba(233, 30, 99, 1)",
			"rgba(156, 39, 176, 1)",
			"rgba(103, 58, 183, 1)",
			"rgba(63, 81, 181, 1)",
		],
	}),
	methods: {
		...mapActions(["setColor", "setColorMode"]),
	},
	computed: {
		...mapGetters(["fillColor", "strokeColor", "colorMode"]),
	},
};
</script>

<style>
</style>