<template>
	<canvas id="rect-canvas" class="w-100 h-100"></canvas>
</template>

<script>
export default {
	mounted() {
		this.initCanvas();
	},
	methods: {
		initCanvas() {
			this.listenAndDraw();

			let rectCanvas = document.getElementById("rect-canvas");

			rectCanvas.width = rectCanvas.offsetWidth;
			rectCanvas.height = rectCanvas.offsetHeight;
		},

		listenAndDraw() {
			let rectCanvas = document.getElementById("rect-canvas");

			let context = rectCanvas.getContext("2d");

			let drawingBoard = document.getElementById("drawing-board");

			let drawingBoardContext = drawingBoard.getContext("2d");

			let doDraw = false;

			let initalPosition = {
				canvasX: 0,
				canvasY: 0,
			};

			rectCanvas.addEventListener("mousedown", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);
				initalPosition.canvasX = tPosition.canvasX;
				initalPosition.canvasY = tPosition.canvasY;
				doDraw = true;
			});

			rectCanvas.addEventListener("mousemove", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);

				if (doDraw) {
					context.clearRect(
						0,
						0,
						rectCanvas.width,
						rectCanvas.height
					);

					context.beginPath();

					context.rect(
						initalPosition.canvasX,
						initalPosition.canvasY,
						tPosition.canvasX - initalPosition.canvasX,
						tPosition.canvasY - initalPosition.canvasY
					);

					context.stroke();
				}
			});

			rectCanvas.addEventListener("mouseup", () => {
				let tPosition = this.transelateMousePosition(event.x, event.y);

				context.clearRect(0, 0, rectCanvas.width, rectCanvas.height);

				context.beginPath();

				context.rect(
					initalPosition.canvasX,
					initalPosition.canvasY,
					tPosition.canvasX - initalPosition.canvasX,
					tPosition.canvasY - initalPosition.canvasY
				);

				context.stroke();

				drawingBoardContext.drawImage(rectCanvas, 0, 0);

				doDraw = false;
			});
		},

		transelateMousePosition(x = 0, y = 0) {
			let rectCanvas = document.getElementById("rect-canvas");

			let canvasBounds = rectCanvas.getBoundingClientRect();

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
#rect-canvas {
	position: absolute;
	top: 0;
	left: 0;
}
</style>