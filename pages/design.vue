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
					label: "Interaction design",
					count: 5,
					id: "interaction",
				},
				{
					label: "Visual design",
					count: 8,
					id: "visual",
				},
				{
					label: "Motion design",
					count: 1,
					id: "motion",
				},
				{
					label: "Typeface design",
					count: 2,
					id: "typeface",
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
