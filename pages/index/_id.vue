<template>
	<ul class="works" id="projects">
		<ProjectThumb
			v-for="(project, index) in projects"
			:key="project.id"
			:project="project"
		/>
		<ProjectPopup v-if="$store.state.showProject" :projects="projects" />
	</ul>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectThumb from "~/components/complex/ProjectThumb.vue";
import ProjectPopup from "~/components/complex/ProjectPopup.vue";
// import global from "~/mixins/global";
import { mapGetters } from "vuex";
export default Vue.extend({
	name: "IndexPage",
	data() {
		return {};
	},
	// mixins: [global],
	components: { ProjectThumb, ProjectPopup },
	computed: {
		projects() {
			try {
				if (this.$route.params.id) {
					return this.getProjects.filter((item: object) => {
						return item.tags.includes(this.$route.params.id);
					});
				} else if (this.$route.name == "works-id") {
					return this.getProjects;
				} else if (this.$route.name == "index-id") {
					return this.getProjects.filter((item: object) => {
						return (
							item.roles.includes("designer") ||
							item.roles.includes("developer")
						);
					});
				} else {
					return;
				}
			} catch (e) {
				console.log(e);
			}
		},
		...mapGetters(["getProjects"]),
	},
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
		grid-row-gap: 1.5rem;
	}
}
</style>
