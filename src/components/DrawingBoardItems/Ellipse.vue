<template>
	<canvas id="ellipse-canvas" class="w-100 h-100"></canvas>
</template>

<script>
export default {
	mounted() {
		this.initCanvas();
	},
	methods: {
		initCanvas() {
			this.listenAndDraw();

			let ellipseCanvas = document.getElementById("ellipse-canvas");

			ellipseCanvas.width = ellipseCanvas.offsetWidth;
			ellipseCanvas.height = ellipseCanvas.offsetHeight;
		},

		listenAndDraw() {
			let ellipseCanvas = document.getElementById("ellipse-canvas");

			let context = ellipseCanvas.getContext("2d");

			let drawingBoard = document.getElementById("drawing-board");

			let drawingBoardContext = drawingBoard.getContext("2d");

			let doDraw = false;

			let initalPosition = {
				canvasX: 0,
				canvasY: 0,
			};

			ellipseCanvas.addEventListener("mousedown", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);
				initalPosition.canvasX = tPosition.canvasX;
				initalPosition.canvasY = tPosition.canvasY;
				doDraw = true;
			});

			ellipseCanvas.addEventListener("mousemove", (event) => {
				let tPosition = this.transelateMousePosition(event.x, event.y);

				if (doDraw) {
					context.clearRect(
						0,
						0,
						ellipseCanvas.width,
						ellipseCanvas.height
					);

					let center = {
						x:
							(tPosition.canvasX - initalPosition.canvasX) / 2 +
							initalPosition.canvasX,
						y:
							(tPosition.canvasY - initalPosition.canvasY) / 2 +
							initalPosition.canvasY,
					};

					let radius = {
						x: tPosition.canvasX - initalPosition.canvasX,
						y: tPosition.canvasY - initalPosition.canvasY,
					};

					context.beginPath();

					context.ellipse(
						center.x,
						center.y,
						radius.x,
						radius.y,
						Math.PI,
						0,
						2 * Math.PI
					);

					context.stroke();
				}
			});

			ellipseCanvas.addEventListener("mouseup", () => {
				let tPosition = this.transelateMousePosition(event.x, event.y);

				context.clearRect(
					0,
					0,
					ellipseCanvas.width,
					ellipseCanvas.height
				);

				let center = {
					x:
						(tPosition.canvasX - initalPosition.canvasX) / 2 +
						initalPosition.canvasX,
					y:
						(tPosition.canvasY - initalPosition.canvasY) / 2 +
						initalPosition.canvasY,
				};

				let radius = {
					x: tPosition.canvasX - initalPosition.canvasX,
					y: tPosition.canvasY - initalPosition.canvasY,
				};

				context.beginPath();

				context.ellipse(
					center.x,
					center.y,
					radius.x,
					radius.y,
					Math.PI,
					0,
					2 * Math.PI
				);

				context.stroke();

				drawingBoardContext.drawImage(ellipseCanvas, 0, 0);

				doDraw = false;
			});
		},

		transelateMousePosition(x = 0, y = 0) {
			let ellipseCanvas = document.getElementById("ellipse-canvas");

			let canvasBounds = ellipseCanvas.getBoundingClientRect();

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
#ellipse-canvas {
	position: absolute;
	top: 0;
	left: 0;
}
</style>