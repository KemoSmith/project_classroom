<template>
	<div id="outer-drawing-board-container" class="bg-dark shadow-sm">
		<div id="inner-drawing-board-container" class="white w-100 h-100">
			<freehand v-if="drawingMode == 'Freehand'"></freehand>
			<triangle v-if="drawingMode == 'Triangle'"></triangle>
			<ellipse-x v-if="drawingMode == 'Ellipse'"></ellipse-x>
			<rect-x v-if="drawingMode == 'Rect'"></rect-x>
			<text-x v-if="drawingMode == 'Text'"></text-x>
			<image-x v-if="drawingMode == 'Image'"></image-x>
			<video-x v-if="drawingMode == 'Video'"></video-x>
			<two-point-line v-if="drawingMode == 'TwoPointLine'"></two-point-line>
			<!-- <pdf-x v-if="drawingMode == 'PDF'"></pdf-x> -->
			<canvas id="drawing-board" class="bg-light"></canvas>
		</div>
	</div>
</template>

<script>
import Freehand from "./DrawingBoardItems/Freehand";
import Triangle from "./DrawingBoardItems/Triangle";
import EllipseX from "./DrawingBoardItems/Ellipse";
import RectX from "./DrawingBoardItems/Rect";
import TextX from "./DrawingBoardItems/Text";
import ImageX from "./DrawingBoardItems/Image";
import VideoX from "./DrawingBoardItems/Video";
import TwoPointLine from "./DrawingBoardItems/TwoPointLine";
// import PdfX from "./DrawingBoardItems/PDF";
import { mapGetters } from "vuex";
export default {
	mounted() {
		this.setDrawingBoardSize();

		window.addEventListener("resize", () => {
			this.setDrawingBoardSize();
		});
	},

	components: {
		Freehand,
		Triangle,
		EllipseX,
		RectX,
		TextX,
		ImageX,
		VideoX,
		TwoPointLine,
		// PdfX,
	},

	methods: {
		setDrawingBoardSize() {
			const innerDrawingBoardContainer = document.getElementById(
				"inner-drawing-board-container"
			);

			let drawingBoard = document.getElementById("drawing-board");

			let drawingBoardSize = {
				height: `${innerDrawingBoardContainer.offsetHeight}px`,
				width: `${innerDrawingBoardContainer.offsetWidth}px`,
			};

			drawingBoard.style.height = drawingBoardSize.height;
			drawingBoard.style.width = drawingBoardSize.width;

			drawingBoard.height = innerDrawingBoardContainer.offsetHeight;
			drawingBoard.width = innerDrawingBoardContainer.offsetWidth;
		},

		
	},

	computed: {
		...mapGetters(["drawingMode"]),
	},
};
</script>

<style>
#outer-drawing-board-container {
	width: 100%;
	padding-top: calc(100% * 0.5625);
	position: relative;
}
#inner-drawing-board-container {
	position: absolute;
	top: 0;
	left: 0;
}
</style>