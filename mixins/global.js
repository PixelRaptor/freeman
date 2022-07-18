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
						return item.roles
							.concat(item.tools)
							.includes(this.$route.params.id);
					});
				} else {
					return this.getProjects.filter((item) => {
						return item.roles.includes("Developer");
					});
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
