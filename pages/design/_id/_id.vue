<template>
	<ul class="works">
		<ProjectThumb v-for="i in 1" :key="i" />
	</ul>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectThumb from "~/components/complex/ProjectThumb.vue";
export default Vue.extend({
	name: "DesignCategories",
	data() {
		return {};
	},
	components: { ProjectThumb },
});
</script>

<style lang="scss" scoped>
.works {
	padding-top: 0.5rem;
}

@media only screen and (min-width: 672px) {
	.works {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}
}
</style>
