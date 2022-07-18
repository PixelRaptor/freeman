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
