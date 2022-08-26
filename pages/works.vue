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
					label: "Interaction Design",
					id: "interaction",
				},
				{
					label: "Visual Design",
					id: "visual",
				},
				{
					label: "Motion Design",
					id: "motion",
				},
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
			],
			routeprefix: "/works/",
		};
	},
	components: {
		Categories,
	},
});
</script>

<style lang="scss" scoped></style>
