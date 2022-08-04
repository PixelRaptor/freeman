<template>
	<div class="categories">
		<Categories :categories="categories" :routeprefix="routeprefix" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Categories from "~/components/complex/Categories.vue";

export default Vue.extend({
	name: "IndexPage",
	data() {
		return {
			categories: [
				{
					label: "Interaction",
					id: "interaction",
				},
				{
					label: "Visual",
					id: "visual",
				},
				{
					label: "Motion",
					id: "motion",
				},
				{
					label: "Typeface & Icon",
					id: "typeface",
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
				{
					label: "HTML",
					id: "html",
				},
			],
			routeprefix: "/",
		};
	},
	components: { Categories },
});
</script>

<style lang="scss" scoped></style>
