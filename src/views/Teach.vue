<template>
	<div>
		<v-toolbar dense class="mb-7" color="blue-grey lighten-4" flat>
			<h3 class="m-0 font-weight-light">
				<v-icon class="mr-1" color="blue">mdi-teach</v-icon>Teach
			</h3>
			<v-spacer></v-spacer>
			<v-btn icon tile>
				<v-icon>mdi-draw</v-icon>
			</v-btn>
			<v-btn icon tile>
				<v-icon>mdi-webcam</v-icon>
			</v-btn>
			<v-btn icon tile>
				<v-icon>mdi-projector-screen</v-icon>
			</v-btn>
		</v-toolbar>
		<h6 class="text-center font-weight-normal text-dark">Draw</h6>
		<v-divider class="m-0 col-8 p-0 mx-auto"></v-divider>
		<div class="p-3 d-flex justify-content-center">
			<v-btn
				icon
				tile
				@click="setDrawingMode('Freehand')"
				:color="drawingMode === 'Freehand' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-pencil</v-icon>
			</v-btn>
			<v-btn
				icon
				tile
				@click="setDrawingMode('TwoPointLine')"
				:color="drawingMode === 'TwoPointLine' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-ray-start-end</v-icon>
			</v-btn>
			<v-btn
				icon
				tile
				@click="setDrawingMode('Triangle')"
				:color="drawingMode === 'Triangle' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-triangle-outline</v-icon>
			</v-btn>
			<v-btn
				icon
				tile
				@click="setDrawingMode('Ellipse')"
				:color="drawingMode === 'Ellipse' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-circle-outline</v-icon>
			</v-btn>
			<v-btn
				icon
				tile
				@click="setDrawingMode('Rect')"
				:color="drawingMode === 'Rect' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-square-outline</v-icon>
			</v-btn>
			<v-btn
				icon
				tile
				@click="setDrawingMode('Text')"
				:color="drawingMode === 'Text' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-format-text</v-icon>
			</v-btn>
			<v-btn
				icon
				tile
				@click="setDrawingMode('Eraser')"
				:color="drawingMode === 'Eraser' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-eraser</v-icon>
			</v-btn>
		</div>
		<v-divider class="mt-0 mb-7 blue-grey lighten-4"></v-divider>
		<h6 class="text-center font-weight-normal text-dark">Insert</h6>
		<v-divider class="m-0 col-8 p-0 mx-auto"></v-divider>
		<div class="p-3 d-flex justify-content-center">
			<v-btn
				icon
				tile
				@click="setDrawingMode('Image')"
				:color="drawingMode === 'Image' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-image</v-icon>
			</v-btn>
		</div>
		<v-divider class="mt-0 mb-7 blue-grey lighten-4"></v-divider>
		<h6 class="text-center font-weight-normal text-dark">Present</h6>
		<v-divider class="m-0 col-8 p-0 mx-auto"></v-divider>
		<div class="p-3 d-flex justify-content-center">
			<v-btn
				icon
				tile
				@click="setDrawingMode('PDF')"
				:color="drawingMode === 'PDF' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-file-document</v-icon>
			</v-btn>
			<v-btn
				icon
				tile
				@click="setDrawingMode('Video')"
				:color="drawingMode === 'Video' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-video</v-icon>
			</v-btn>
			<v-btn
				icon
				tile
				@click="setDrawingMode('Video')"
				:color="drawingMode === 'Video' ? 'blue' : 'blue-grey darken-4'"
			>
				<v-icon>mdi-waveform</v-icon>
			</v-btn>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	components: {},
	methods: {
		...mapActions(["setDrawingMode"]),
	},
	computed: {
		...mapGetters(["drawingMode"]),
	},
};
</script>

<style>
</style>