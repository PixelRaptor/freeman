<template>
	<div>
		<Categories :categories="categories" :routeprefix="routeprefix" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Categories from "~/components/complex/Categories.vue";

export default Vue.extend({
	name: "DevelopmentPage",
	data() {
		return {
			categories: [
				{
					label: "React",
					id: "react",
				},
				{
					label: "Vue",
					id: "vue",
				},
				{
					label: "Angular",
					id: "angular",
				},
				{
					label: "Nuxt.js",
					id: "nuxtjs",
				},
				{
					label: "Next.js",
					id: "nextjs",
				},
				{
					label: "Node.js",
					id: "nodejs",
				},
				{
					label: "Javascript",
					id: "javascript",
				},
				{
					label: "Typescript",
					id: "typescript",
				},
				{
					label: "HTML",
					id: "html",
				},
			],
			routeprefix: "/development/",
		};
	},
	components: {
		Categories,
	},
});
</script>

<style lang="scss" scoped></style>
