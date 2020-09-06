<template>
	<canvas id="freehand-canvas" class="w-100 h-100"></canvas>
</template>

<script>
export default {
	mounted() {
		this.initCanvas();
	},
	methods: {
		initCanvas() {
			this.listenAndDraw();

			let freehandCanvas = document.getElementById("freehand-canvas");

			freehandCanvas.width = freehandCanvas.offsetWidth;
			freehandCanvas.height = freehandCanvas.offsetHeight;
		},

		listenAndDraw() {
			let freehandCanvas = document.getElementById("freehand-canvas");

			let context = freehandCanvas.getContext("2d");

			let drawingBoard = document.getElementById("drawing-board");

			let drawingBoardContext = drawingBoard.getContext("2d");

			let doDraw = false;

			freehandCanvas.addEventListener("mousedown", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);
				context.moveTo(tPosition.canvasX, tPosition.canvasY);
				doDraw = true;
			});

			freehandCanvas.addEventListener("mousemove", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);
				if (doDraw) {
					context.lineTo(tPosition.canvasX, tPosition.canvasY);
					context.stroke();
					drawingBoardContext.drawImage(freehandCanvas, 0, 0);
				}
			});

			freehandCanvas.addEventListener("mouseup", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);
				context.lineTo(tPosition.canvasX, tPosition.canvasY);
				context.stroke();
				doDraw = false;

				drawingBoardContext.drawImage(freehandCanvas, 0, 0);
			});
		},

		transelateMousePosition(x = 0, y = 0) {
			let freehandCanvas = document.getElementById("freehand-canvas");

			let canvasBounds = freehandCanvas.getBoundingClientRect();

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
#freehand-canvas {
	position: absolute;
	top: 0;
	left: 0;
}
</style>