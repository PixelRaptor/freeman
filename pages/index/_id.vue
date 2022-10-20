<template>
	<ul class="works" id="projects">
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
import global from "~/mixins/global";
export default Vue.extend({
	name: "IndexPage",
	data() {
		return {};
	},
	mixins: [global],
	components: { ProjectThumb },
});
</script>

<style lang="scss" scoped>
.works {
	padding-top: 1rem;
	scroll-margin-top: 5rem;
}

@media only screen and (min-width: 672px) {
	.works {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}
}
</style>
