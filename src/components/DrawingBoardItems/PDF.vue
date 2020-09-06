<template>
	<div class="w-100 h-100">
		<canvas id="pdf-canvas" class="w-100 h-100"></canvas>
		<v-slider id="pdf-scroll" min="0" max="100" v-model="renderParams.scrollOffset" vertical @change="renderPdf"></v-slider>
	</div>
</template>

<script>
export default {
	data: () => ({
		pdfUrl: "http://localhost:8080/pdf/test.pdf",
		renderParams: {
			scale: 1,
			scrollOffset: 0,
		},
	}),
	mounted() {
		this.initCanvas();
		this.renderPdf();
	},
	methods: {
		initCanvas() {
			let pdfCanvas = document.getElementById("pdf-canvas");

			pdfCanvas.width = pdfCanvas.offsetWidth;
			pdfCanvas.height = pdfCanvas.offsetHeight;
		},

		renderPdf() {
			// Loaded via <script> tag, create shortcut to access PDF.js exports.
			var pdfjsLib = window["pdfjs-dist/build/pdf"];

			// The workerSrc property shall be specified.
			pdfjsLib.GlobalWorkerOptions.workerSrc =
				"//mozilla.github.io/pdf.js/build/pdf.worker.js";

			// Asynchronous download of PDF
			var loadingTask = pdfjsLib.getDocument(this.pdfUrl);

			let renderParams = this.renderParams;

			loadingTask.promise.then(
				function (pdf) {
					console.log("PDF loaded");

					// Fetch the first page
					var pageNumber = 1;
					pdf.getPage(pageNumber).then(function (page) {
						console.log("Page loaded");

						var canvas = document.getElementById("pdf-canvas");

						let dummyViewport = page.getViewport({
							scale: renderParams.scale,
						});

						let scrollable = canvas.height - dummyViewport.height;

						let scrollOffset =
							(renderParams.scrollOffset / 100) * scrollable;

						let xOffset = (canvas.width - dummyViewport.width) / 2;

						console.log(
							(renderParams.scrollOffset / 100) * scrollable
						);

						var viewport = page.getViewport({
							scale: renderParams.scale,
							offsetY: scrollOffset,
							offsetX: xOffset,
						});

						// Prepare canvas using PDF page dimensions
						var context = canvas.getContext("2d");
						console.dir(canvas);

						// Render PDF page into canvas context
						var renderContext = {
							canvasContext: context,
							viewport: viewport,
						};
						var renderTask = page.render(renderContext);
						renderTask.promise.then(function () {
							console.log("Page rendered");
						});
					});
				},
				function (reason) {
					// PDF loading error
					console.error(reason);
				}
			);
		},
	},
};
</script>

<style>
#pdf-canvas {
	position: absolute;
	top: 0;
	left: 0;
}

#pdf-scroll {
	position: absolute;
}
</style>