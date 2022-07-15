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
		state.showProject = false;
	},
	showProjectPopup(state, project) {
		state.showProject = true;
		state.selectedProject = project;
	},
};

export const actions = {
	clearArticles({ commit }) {
		commit("CLEAR_ARTICLES");
	},
};
