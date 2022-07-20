import { mapGetters } from "vuex";
export default {
	data() {
		return {};
	},
	computed: {
		// mix the getters into computed with object spread operator
		projects() {
			try {
				console.log("this.$routestart filter");
				console.log(this.$route);
				if (this.$route.params.id) {
					console.log(this.$route.params.id);
					return this.getProjects.filter((item) => {
						console.log(item.roles.concat(item.tags));
						return item.roles
							.concat(item.tags)
							.includes(this.$route.params.id);
					});
				} else {
					return this.getProjects.filter((item) => {
						return item.roles.includes();
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
