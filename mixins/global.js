import { mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	computed: {
		// mix the getters into computed with object spread operator
		projects() {
			try {
				console.log(this.$route.name);
				if (this.$route.params.id) {
					return this.getProjects.filter((item) => {
						return item.tags.includes(this.$route.params.id);
					});
				} else if (this.$route.name == "works-id") {
					return this.getProjects;
				} else if (this.$route.name == "index-id") {
					return this.getProjects.filter((item) => {
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
		...mapGetters([
			"getProjects",
			// ...
		]),
	},
};
