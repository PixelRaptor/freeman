<template>
	<div class="categories">
		<ul class="category-pills">
			<Pill :value="{ label: 'All', count: 3, id: 'all' }" :key="1" />
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
