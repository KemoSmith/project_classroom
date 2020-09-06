<template>
	<div>
		<v-fade-transition leave-absolute>
			<v-overlay absolute v-if="!canPlay" opacity="0.9" z-index="201">
				<v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
			</v-overlay>
		</v-fade-transition>
		<v-toolbar id="video-controls" class="w-100" dense flat color="rgba(10,10,10,0.8)" dark>
			<v-spacer></v-spacer>
			<v-btn :disabled="!canPlay" icon @click="controlVideo('play')">
				<v-icon>mdi-play</v-icon>
			</v-btn>
			<v-btn icon @click="controlVideo('stop')">
				<v-icon>mdi-stop</v-icon>
			</v-btn>
			<v-btn icon @click="controlVideo('pause')">
				<v-icon>mdi-pause</v-icon>
			</v-btn>
			<v-spacer></v-spacer>
		</v-toolbar>
		<canvas id="video-canvas" class="w-100 h-100 black"></canvas>
		<video id="vida" class="h-100 w-100 d-none" :src="require('../../assets/video/spider_man.mp4')"></video>
	</div>
</template>

<script>
export default {
	mounted() {
		this.initCanvas();
	},
	data: () => ({
		canPlay: false,
	}),
	methods: {
		initCanvas() {
			this.listenAndDraw();

			let videoCanvas = document.getElementById("video-canvas");

			videoCanvas.width = videoCanvas.offsetWidth;
			videoCanvas.height = videoCanvas.offsetHeight;
		},

		listenAndDraw() {
			let videoCanvas = document.getElementById("video-canvas");

			let context = videoCanvas.getContext("2d");

			let img = document.getElementById("vida");

			img.addEventListener("loadedmetadata", () => {
				this.canPlay = true;
			});

			img.addEventListener("play", () => {
				let imgWidth = videoCanvas.width;
				let imgHeight =
					(img.videoHeight / img.videoWidth) * videoCanvas.width;
				setInterval(() => {
					let imgYSpace = Math.floor(
						(videoCanvas.height - imgHeight) / 2
					);
					context.drawImage(img, 0, imgYSpace, imgWidth, imgHeight);
				}, 1000 / 60);
			});
		},

		transelateMousePosition(x = 0, y = 0) {
			let videoCanvas = document.getElementById("video-canvas");

			let canvasBounds = videoCanvas.getBoundingClientRect();

			let canvasX = x - Math.floor(canvasBounds.left);
			let canvasY = y - Math.floor(canvasBounds.top);

			return {
				canvasX,
				canvasY,
			};
		},

		controlVideo(action) {
			let videoDiv = document.getElementById("vida");

			switch (action) {
				case "play":
					videoDiv.play();
					break;
				case "stop":
					videoDiv.pause();
					videoDiv.currentTime = 0;
					break;
				case "pause":
					videoDiv.pause();
					break;
			}
		},
	},
};
</script>

<style>
#video-canvas {
	position: absolute;
	top: 0;
	left: 0;
}

#video-controls {
	position: absolute;
	bottom: 0;
	z-index: 200;
	opacity: 0.05;
	transition: opacity 500ms;
}

#video-controls:hover {
	opacity: 1;
}
</style>