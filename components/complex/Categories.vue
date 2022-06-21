<template>
	<div class="categories">
		<ul class="category-pills">
			<Pill
				:value="{ label: 'All', count: 3, id: '' }"
				:key="1"
				:routeprefix="routeprefix"
			/>
			<Pill
				:value="category"
				:routeprefix="routeprefix"
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
	name: "Categories",
	props: {
		categories: {},
		routeprefix: {
			type: String,
			default: "/",
		},
	},
	components: { TopBar, Pill },
});
</script>

<style lang="scss" scoped>
.categories {
	padding-top: 1.38rem;
	.category-pills {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
	}
}
</style>
