<template>
	<div>
		<canvas id="image-canvas" class="w-100 h-100"></canvas>
		<img id="imga" :src="require('../../assets/logo.png')" class="d-none" />
	</div>
</template>

<script>
export default {
	mounted() {
		this.initCanvas();
	},
	methods: {
		initCanvas() {
			this.listenAndDraw();

			let imageCanvas = document.getElementById("image-canvas");

			imageCanvas.width = imageCanvas.offsetWidth;
			imageCanvas.height = imageCanvas.offsetHeight;
		},

		listenAndDraw() {
			let imageCanvas = document.getElementById("image-canvas");

			let context = imageCanvas.getContext("2d");

			let img = document.getElementById("imga");

			img.addEventListener("load", () => {
				context.drawImage(img, 250, 150);
			});
		},

		transelateMousePosition(x = 0, y = 0) {
			let imageCanvas = document.getElementById("image-canvas");

			let canvasBounds = imageCanvas.getBoundingClientRect();

			let canvasX = x - Math.floor(canvasBounds.left);
			let canvasY = y - Math.floor(canvasBounds.top);

			return {
				canvasX,
				canvasY,
			};
		},
	},
};
</script>

<style>
#image-canvas {
	position: absolute;
	top: 0;
	left: 0;
}
</style>