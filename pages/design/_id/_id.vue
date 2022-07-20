<template>
	<ul class="works">
		<ProjectThumb
			v-for="project in projects"
			:key="project.id"
			:project="project"
		/>
	</ul>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectThumb from "~/components/complex/ProjectThumb.vue";
import { mapGetters } from "vuex";
import global from "~/mixins/global";
export default Vue.extend({
	name: "DesignCategories",
	data() {
		return {};
	},
	mixins: [global],
	components: { ProjectThumb },
	computed: {
		// mix the getters into computed with object spread operator
		...mapGetters([
			"getProjects",
			// ...
		]),
	},
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
