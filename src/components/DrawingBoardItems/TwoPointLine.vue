<template>
	<canvas id="two-point-line-canvas" class="w-100 h-100"></canvas>
</template>

<script>
export default {
	mounted() {
		this.initCanvas();
	},
	methods: {
		initCanvas() {
			this.listenAndDraw();

			let twoPointLineCanvas = document.getElementById(
				"two-point-line-canvas"
			);

			twoPointLineCanvas.width = twoPointLineCanvas.offsetWidth;
			twoPointLineCanvas.height = twoPointLineCanvas.offsetHeight;
		},

		listenAndDraw() {
			let twoPointLineCanvas = document.getElementById(
				"two-point-line-canvas"
			);

			let context = twoPointLineCanvas.getContext("2d");

			let drawingBoard = document.getElementById("drawing-board");

			let drawingBoardContext = drawingBoard.getContext("2d");

			let doDraw = false;

			let initalPosition = {
				canvasX: 0,
				canvasY: 0,
			};

			twoPointLineCanvas.addEventListener("mousedown", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);
				initalPosition.canvasX = tPosition.canvasX;
				initalPosition.canvasY = tPosition.canvasY;
				doDraw = true;
			});

			twoPointLineCanvas.addEventListener("mousemove", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);
				if (doDraw) {
					context.clearRect(
						0,
						0,
						twoPointLineCanvas.width,
						twoPointLineCanvas.height
					);

					context.beginPath();
					context.moveTo(
						initalPosition.canvasX,
						initalPosition.canvasY
					);
					context.lineTo(tPosition.canvasX, tPosition.canvasY);
					context.stroke();
				}
			});

			twoPointLineCanvas.addEventListener("mouseup", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);
				context.clearRect(
					0,
					0,
					twoPointLineCanvas.width,
					twoPointLineCanvas.height
				);

				context.beginPath();
				context.moveTo(initalPosition.canvasX, initalPosition.canvasY);
				context.lineTo(tPosition.canvasX, tPosition.canvasY);
				context.stroke();
				doDraw = false;

				drawingBoardContext.drawImage(twoPointLineCanvas, 0, 0);
			});
		},

		transelateMousePosition(x = 0, y = 0) {
			let twoPointLineCanvas = document.getElementById(
				"two-point-line-canvas"
			);

			let canvasBounds = twoPointLineCanvas.getBoundingClientRect();

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
#two-point-line-canvas {
	position: absolute;
	top: 0;
	left: 0;
}
</style>