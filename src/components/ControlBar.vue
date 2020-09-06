<template>
	<v-system-bar height="30px" color="blue-grey lighten-4">
		<color-picker></color-picker>
		<v-spacer></v-spacer>
		<v-btn icon @click="recordDrawingBoard()">
			<v-icon class="ml-1">mdi-record</v-icon>
		</v-btn>
		<small>
			%100
			<v-icon>mdi-magnify-minus-outline</v-icon>
		</small>
		<div style="width: 100px;">
			<v-slider min="100" max="300" class="mt-5"></v-slider>
		</div>
		<small>
			<v-icon>mdi-magnify-plus-outline</v-icon>%300
		</small>
	</v-system-bar>
</template>

<script>
import ColorPicker from "./ColorPicker";
import { saveAs } from "file-saver";
export default {
	components: {
		ColorPicker,
	},

	methods: {
		recordDrawingBoard() {
			let drawingBoard = document.getElementById("drawing-board");

			let dbStream = drawingBoard.captureStream();

			let recorder = new MediaRecorder(dbStream, {
				audioBitsPerSecond: 128000,
				videoBitsPerSecond: 2500000,
				mimeType: "video/webm",
			});

			recorder.start(5000);

			recorder.addEventListener("dataavailable", (data) => {
				saveAs(data);
			});
		},
	},
};
</script>

<style>
</style>