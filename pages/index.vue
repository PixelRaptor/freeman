<template>
	<div class="categories">
		<ul class="category-pills">
			<Pill :value="{ label: 'All', count: 3, id: '' }" :key="1" />
			<Pill
				:value="category"
				v-for="category in categories"
				:key="category.id"
			/>
		</ul>
		<NuxtChild />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Pill from "~/components/basic/Pill.vue";
import TopBar from "~/components/TopBar.vue";

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
		};
	},
	components: { TopBar, Pill },
});
</script>

<style lang="scss" scoped>
.categories {
	padding-top: 1.2rem;
	.category-pills {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
	}
}
</style>
