import { mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	computed: {
		// mix the getters into computed with object spread operator
		projects() {
			try {
				if (this.$route.params.id) {
					return this.getProjects.filter((item) => {
						return item.tags.includes(this.$route.params.id);
					});
				} else if (this.$route.name == "development-id") {
					return this.getProjects.filter((item) => {
						return item.roles.includes("developer");
					});
				} else if (this.$route.name == "design-id") {
					return this.getProjects.filter((item) => {
						return item.roles.includes("designer");
					});
				} else {
					return;
				}
			} catch (e) {
				console.log(e);
			}
		},
		...mapGetters([
			"getProjects",
			// ...
		]),
	},
};
