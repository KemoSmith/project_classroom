<template>
	<div id="classroom" class="row m-0 black">
		<div class="col-9 h-100 p-3 d-flex align-items-center blue-grey lighten-5">
			<drawing-board></drawing-board>
		</div>
		<div class="col-3 h-100 p-0 blue-grey lighten-4" style="border-left: 1px solid #101010;">
			<div id="classroom-right">
				<router-view></router-view>
			</div>
			<v-toolbar dense color="blue-grey lighten-4" flat>
				<v-spacer></v-spacer>
				<v-btn icon tile class="m-0 text-decoration-none" color="blue-grey darken-4 " :to="{name: 'Teach'}">
					<v-icon>mdi-teach</v-icon>
				</v-btn>
				<v-btn icon tile class="m-0 text-decoration-none" color="blue-grey darken-4 ">
					<v-icon>mdi-comment</v-icon>
				</v-btn>
				<v-btn icon tile class="m-0 text-decoration-none" color="blue-grey darken-4 ">
					<v-icon>mdi-account-group</v-icon>
				</v-btn>
				<v-btn icon tile class="m-0 text-decoration-none" color="blue-grey darken-4 ">
					<v-icon>mdi-file-cabinet</v-icon>
				</v-btn>
				<v-spacer></v-spacer>
			</v-toolbar>
		</div>
	</div>
</template>

<script>
import DrawingBoard from "../components/DrawingBoard";
export default {
	components: {
		DrawingBoard,
	},
};
</script>

<style>
#classroom {
	height: calc(100vh - 30px - 30px - 1px);
	widows: 100vw;
}
#classroom-right {
	height: calc(100vh - 30px - 30px - 48px - 1px);
}
</style>