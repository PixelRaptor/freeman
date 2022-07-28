<template>
	<div>
		<Categories :categories="categories" :routeprefix="routeprefix" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Categories from "~/components/complex/Categories.vue";

export default Vue.extend({
	name: "DesignPage",
	data() {
		return {
			categories: [
				{
					label: "Figma",
					id: "figma",
				},
				{
					label: "Adobe Xd",
					id: "xd",
				},
				{
					label: "InVision Studio",
					id: "invision",
				},
				{
					label: "Origami Studio",
					id: "origami",
				},
				{
					label: "illustrator",
					id: "illustrator",
				},
			],
			routeprefix: "/design/",
		};
	},
	components: {
		Categories,
	},
});
</script>

<style lang="scss" scoped></style>
