export const state = () => ({
	projects: [],
	showProject: false,
	selectedProject: {},
});

export const mutations = {
	CLEAR_ARTICLES(state) {
		state.articles = [];
	},
	closeProjctPopup(state) {
		console.log("tese");
		state.showProject = false;
	},
	showProjectPopup(state, project) {
		console.log("tese");
		state.showProject = true;
		state.selectedProject = project;
	},
};

export const actions = {
	clearArticles({ commit }) {
		commit("CLEAR_ARTICLES");
	},
};
