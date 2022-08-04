export const state = () => ({
	projects: [
		{
			id: "8",
			title: "Afya Pap Blog",
			theme: "#F19B3E",
			tags: ["nuxtjs", "nodejs", "figma", "typescript", "vscode", "scss"],
			resource: {
				type: "Figma",
				link: "www.resource.com",
				disabled: true,
			},
			demo: "https://blog.afyapap.com/",
			roles: ["developer", "designer"],
			collaborators: [
				{ name: "Bakani Pilime", id: "bmpz@github.com" },
				{
					name: "Allen Kawanzaruwa",
					id: "https://gitlab.com/allen.kawanzaruwa",
				},
			],
			thumbnail:
				"https://uxdev.mo.cloudinary.net/baobab-circle_qNhgxPgJ6.png",
			content: {
				overview: {
					section: "overview",
					passage: [
						"Baobab Circle required a web version of their Afya Pap health articles. The main reason was to enable patients, caregivers and health professionals to share health articles with everyone even if they didn't have the mobile app. There were 2 key requirements and these were:",
						"- Dynamic links that would open the mobile app if you already have it installed, otherwise it would just route you to the article web page",
						"- Shareable web links with dynamic meta tags",
					],
				},
				solution: {
					section: "solution",
					passage: [
						"We creeated a new design system for the web as there was already a plan to bring the whole app to the web at in future while design the web app, and the design was done on Figma, then created interactive prototypes using Origami studio.",
						"On the development side the main things we had to consider when comming up with the solution for this project were the frontend framework, media optimisation and hosting. ",
						"- For the frontend framework we decided to use Nuxtjs, a JavaScript library based on Vue.js. We chose it because it has Server Side Rendering and Dynamic Meta, which allowed us to display key information when sharing articles on social media. It also came with a posiitive impact on the SEO",
						"- This was going to be an image heavy product, so the implementation of media optimisation was important. This was implemented by using cloudinary ",
						"- We had a couple of options for hosting but we ended up setting up our own server, main reason being Server Side Rendering",
					],
					images: [
						{
							id: 1,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
						},
						{
							id: 2,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
						},
						{
							id: 3,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
						},
						{
							id: 4,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
						},
						{
							id: 5,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
						},
					],
				},
				results: {
					section: "results",
					passage: [
						"After 6 weeks of design, development, reviewing the projected was completed. Though there was was a couple of things that we had to leave out, one of them being the option to resize the font which might be implimented at some point in the future",
					],
					images: [
						{
							id: 1,
							title: "Cover",
							url: "https://uxdev.mo.cloudinary.net/desktop_j20CbaLir.png",
						},
					],
				},
			},
		},
		{
			id: "9",
			title: "Shumba Money",
			theme: "#CE0E2D",
			tags: ["ios", "android", "figma", "illustrator", "kotlin", "swift"],
			resource: {
				type: "Github",
				link: "www.resource.com",
				disabled: false,
			},
			demo: "www.demo.com",
			roles: ["designer"],
			collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
			thumbnail:
				"https://uxdev.mo.cloudinary.net/shumba-money_fXFHk0Jg9.png",
			content: {
				overview: {
					section: "overview",
					passage: [
						"Shumba money already had a working web app that their users were already using for about a year, they felt it was time to introduce a navtive mobile app along the web app to make the process more friendly and enjoyable. So we had to design an iOS and Android version of the app, and we were to add extra features and revamp the userflow. ",
					],
				},
				solution: {
					section: "solution",
					passage: [
						" We used qualitative research methods, and this was implimented by observing our shumba money users using the web app and secondary research. Because this was an already existing app we had an advantage of knowing what the users enjoy and their painpoints, this helped us come up with key focus points at the early stages of our user research. We looked into a couple of competitors which provided similar services and how they implemented their solutions to same of the challenges that Shumba money users faced on the web app. The designs and the prototypes were done on Figma. Since the app was to be available on two different platforms, we had to create to  seperate designs that had minor differences to accomodate the different requirements for different platforms",
					],

					images: [
						{
							id: 1,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-mobile_OhVtQdrkP.png",
						},
						{
							id: 2,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-1_7YkCaDAXv.png",
						},
						{
							id: 3,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-2_ID7q3eC5C.png",
						},
						{
							id: 4,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-3_OLMF2_WmL.png",
						},
						{
							id: 5,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
						},
					],
				},
				results: {
					section: "results",
					passage: ["The final designs for the iOS and Android app"],
				},
			},
		},
		{
			id: "12",
			title: "Dstv",
			theme: "#0095DA",
			tags: [
				"angular",
				"express",
				"nodejs",
				"figma",
				"illustrator",
				"vScode",
				"heroku",
			],
			resource: {
				type: "Github",
				link: "www.resource.com",
				disabled: false,
			},
			demo: "www.demo.com",
			roles: ["designer", "developer"],
			collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
			thumbnail: "https://uxdev.mo.cloudinary.net/dstv_yl9E_oLYj.png",
			content: {
				overview: {
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
				},
				solution: {
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
					images: [
						{
							id: 1,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-mobile_OhVtQdrkP.png",
						},
						{
							id: 2,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-1_7YkCaDAXv.png",
						},
						{
							id: 3,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-2_ID7q3eC5C.png",
						},
						{
							id: 4,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-3_OLMF2_WmL.png",
						},
						{
							id: 5,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
						},
					],
				},
				results: {
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
				},
			},
		},
		{
			id: "13",
			title: "Fuddy",
			theme: "#EF6433",
			tags: [
				"angular",
				"express",
				"nodejs",
				"figma",
				"illustrator",
				"vscode",
				"heroku",
			],
			resource: {
				type: "Github",
				link: "www.resource.com",
				disabled: false,
			},
			demo: "www.demo.com",
			roles: ["developer"],
			collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
			thumbnail: "https://uxdev.mo.cloudinary.net/fuddy_DHUAKUS-o.png",
			content: {
				overview: {
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
				},
				solution: {
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
					images: [
						{
							id: 1,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-mobile_OhVtQdrkP.png",
						},
						{
							id: 2,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-1_7YkCaDAXv.png",
						},
						{
							id: 3,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-2_ID7q3eC5C.png",
						},
						{
							id: 4,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-3_OLMF2_WmL.png",
						},
						{
							id: 5,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
						},
					],
				},
				results: {
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
				},
			},
		},
	],
	showProject: false,
	selectedProject: {},
});

export const getters = {
	getSelectedProject(state) {
		return state.selectedProject;
	},
	getProjects(state) {
		return state.projects;
	},
};

export const mutations = {
	CLEAR_PROJECTS(state) {
		state.articles = [];
	},
	closeProjctPopup(state) {
		state.showProject = false;
	},
	showProjectPopup(state, project) {
		state.showProject = true;
		state.selectedProject = project;
	},
	SELECTED_PROJECTS(state, project) {
		state.selectedProject = project;
	},
};

export const actions = {
	clearProjects({ commit }) {
		commit("CLEAR_PROJECTS");
	},
	setSelectedProject({ commit }, project) {
		commit("SELECTED_PROJECTS", project);
	},
};
