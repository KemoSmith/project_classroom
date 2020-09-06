<template>
	<canvas id="triangle-canvas" class="w-100 h-100"></canvas>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	mounted() {
		this.initCanvas();
	},
	methods: {
		initCanvas() {
			this.listenAndDraw();

			let triangleCanvas = document.getElementById("triangle-canvas");

			triangleCanvas.width = triangleCanvas.offsetWidth;
			triangleCanvas.height = triangleCanvas.offsetHeight;
		},

		listenAndDraw() {
			let triangleCanvas = document.getElementById("triangle-canvas");

			let context = triangleCanvas.getContext("2d");

			context.strokeStyle = "red";

			let drawingBoard = document.getElementById("drawing-board");

			let drawingBoardContext = drawingBoard.getContext("2d");

			let doDraw = false;

			let initalPosition = {
				canvasX: 0,
				canvasY: 0,
			};

			triangleCanvas.addEventListener("mousedown", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);
				initalPosition.canvasX = tPosition.canvasX;
				initalPosition.canvasY = tPosition.canvasY;
				doDraw = true;
			});

			triangleCanvas.addEventListener("mousemove", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);

				if (doDraw) {
					context.clearRect(
						0,
						0,
						triangleCanvas.width,
						triangleCanvas.height
					);

					context.beginPath();

					context.lineWidth = 10;

					context.moveTo(
						(tPosition.canvasX - initalPosition.canvasX) / 2 +
							initalPosition.canvasX,
						initalPosition.canvasY
					);

					context.lineTo(tPosition.canvasX, tPosition.canvasY);

					context.lineTo(initalPosition.canvasX, tPosition.canvasY);

					context.lineTo(
						(tPosition.canvasX - initalPosition.canvasX) / 2 +
							initalPosition.canvasX,
						initalPosition.canvasY
					);

					context.closePath();

					context.fillStyle = this.fillColor;
					context.fill();

					context.strokeStyle = this.strokeColor;
					context.stroke();
				}
			});

			triangleCanvas.addEventListener("mouseup", () => {
				let tPosition = this.transelateMousePosition(event.x, event.y);

				context.clearRect(
					0,
					0,
					triangleCanvas.width,
					triangleCanvas.height
				);

				context.beginPath();

				context.lineWidth = 10;

				context.moveTo(
					(tPosition.canvasX - initalPosition.canvasX) / 2 +
						initalPosition.canvasX,
					initalPosition.canvasY
				);

				context.lineTo(tPosition.canvasX, tPosition.canvasY);

				context.lineTo(initalPosition.canvasX, tPosition.canvasY);

				context.lineTo(
					(tPosition.canvasX - initalPosition.canvasX) / 2 +
						initalPosition.canvasX,
					initalPosition.canvasY
				);

				context.closePath();

				context.fillStyle = this.fillColor;
				context.fill();

				context.strokeStyle = this.strokeColor;
				context.stroke();

				drawingBoardContext.drawImage(triangleCanvas, 0, 0);

				doDraw = false;
			});
		},

		transelateMousePosition(x = 0, y = 0) {
			let triangleCanvas = document.getElementById("triangle-canvas");

			let canvasBounds = triangleCanvas.getBoundingClientRect();

			let canvasX = x - Math.floor(canvasBounds.left);
			let canvasY = y - Math.floor(canvasBounds.top);

			return {
				canvasX,
				canvasY,
			};
		},
	},
	computed: {
		...mapGetters(["strokeColor", "fillColor", "lineWidth"]),
	},
};
</script>

<style>
#triangle-canvas {
	position: absolute;
	top: 0;
	left: 0;
}
</style>