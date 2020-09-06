<template>
	<div id="text-canvas-outer" class="w-100 h-100">
		<input v-model="text" id="text-i" type="text" @input="listenAndDraw" />
		<v-icon
			id="text-cursor"
			:style="{bottom: `${texCursortPosition.invertedY}px`, right: `${texCursortPosition.invertedX}px`}"
		>mdi-cursor-text</v-icon>
		<canvas id="text-canvas" class="w-100 h-100" @click="initText"></canvas>
	</div>
</template>

<script>
export default {
	mounted() {
		this.initCanvas(); 
	},
	data: () => ({
		text: "",
		textPosition: {
			x: 0,
			y: 0,
		},
		texCursortPosition: {
			invertedX: 0,
			invertedY: 10,
		},
	}),
	methods: {
		initCanvas() {
			this.listenAndDraw();

			let textCanvas = document.getElementById("text-canvas");

			textCanvas.width = textCanvas.offsetWidth;
			textCanvas.height = textCanvas.offsetHeight;
		},

		initText(event) {
			let textCanvas = document.getElementById("text-canvas");

			let textI = document.getElementById("text-i");

			textI.focus();

			let tPositon = this.transelateMousePosition(event.x, event.y);

			this.textPosition.x = tPositon.canvasX;
			this.textPosition.y = tPositon.canvasY;

			this.texCursortPosition.invertedX =
				textCanvas.offsetWidth - tPositon.canvasX;
			this.texCursortPosition.invertedY =
				textCanvas.offsetHeight - tPositon.canvasY;
		},

		listenAndDraw() {
			let textCanvas = document.getElementById("text-canvas");

			let context = textCanvas.getContext("2d");

			let drawingBoard = document.getElementById("drawing-board");

			let drawingBoardContext = drawingBoard.getContext("2d");

			context.clearRect(0, 0, textCanvas.width, textCanvas.height);

			context.font = "30px Arial";

			context.fillText(
				this.text,
				this.textPosition.x,
				this.textPosition.y
			);
			
			drawingBoardContext.drawImage(textCanvas, 0, 0);
		},

		transelateMousePosition(x = 0, y = 0) {
			let textCanvas = document.getElementById("text-canvas");

			let canvasBounds = textCanvas.getBoundingClientRect();

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
#text-canvas-outer {
	position: absolute;
	top: 0;
	left: 0;
}
#text-canvas {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 101;
}
#text-i {
	position: absolute;
	top: 0;
	left: 0;
	background-color: white;
	opacity: 0;
}
#text-cursor {
	position: absolute;
}
</style>