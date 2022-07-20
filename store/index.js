export const state = () => ({
	projects: [
		{
			id: "8",
			title: "Afya Pap Blog",
			theme: "#F19B3E",
			tags: ["nuxtjs", "Nodejs", "Figma", "Typescript", "VScode", "SCSS"],
			resource: {
				type: "Figma",
				link: "www.resource.com",
				disabled: true,
			},
			demo: "https://blog.afyapap.com/",
			roles: ["Developer", "Designer"],
			collaborators: [
				{ name: "Bakani Pilime", id: "bmpz@github.com" },
				{
					name: "Allen Kawanzaruwa",
					id: "https://gitlab.com/allen.kawanzaruwa",
				},
			],
			thumbnail:
				"http://uxdev.mo.cloudinary.net/baobab-logo-tile_FLSUP3QQB.png",
			content: {
				overview: {
					section: "overview",
					passage: [
						"Baobab Circle required a web version of their Afya Pap health articles. The main reason was to enable patients, caregivers and health professionals to share health articles with everyone even if they didn't have the mobile app. There were 2 key requirements and these were:",
						"- Dynamic links that would open the mobile app if you already have it installed, otherwise it would just route you to the article web page",
						"- Shareable web links with dynamic meta tags",
					],
					images: [
						{
							id: 1,
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
						},
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
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 2,
							title: "Cover",
							url: "http://uxdev.mo.cloudinary.net/desktop_j20CbaLir.png",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
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
							url: "http://uxdev.mo.cloudinary.net/desktop_j20CbaLir.png",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
						},
					],
				},
			},
		},
		{
			id: "9",
			title: "Shumba Money",
			theme: "#007B9E",
			tags: ["iOS", "Android", "Figma", "illustrator", "Kotlin", "Swift"],
			resource: {
				type: "Github",
				link: "www.resource.com",
				disabled: false,
			},
			demo: "www.demo.com",
			roles: ["Designer"],
			collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
			thumbnail:
				"http://uxdev.mo.cloudinary.net/baobab-logo-tile_FLSUP3QQB.png",
			content: {
				overview: {
					section: "overview",
					passage: [
						"Shumba money already had a working web app that their users were already using for about a year, they felt it was time to introduce a navtive mobile app along the web app to make the process more friendly and enjoyable. So we had to design an iOS and Android version of the app, and we were to add extra features and revamp the userflow. ",
					],
					images: [
						{
							id: 1,
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
						},
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
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
						},
					],
				},
				results: {
					section: "results",
					passage: ["The final designs for the iOS and Android app"],
					images: [
						{
							id: 1,
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
						},
					],
				},
			},
		},
		{
			id: "12",
			title: "Dstv",
			theme: "#0095DA",
			tags: [
				"Angular",
				"Express",
				"Nodejs",
				"Figma",
				"illustrator",
				"VScode",
				"Heroku",
			],
			resource: {
				type: "Github",
				link: "www.resource.com",
				disabled: false,
			},
			demo: "www.demo.com",
			roles: ["Designer", "Developer"],
			collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
			thumbnail:
				"http://uxdev.mo.cloudinary.net/baobab-logo-tile_FLSUP3QQB.png",
			content: {
				overview: {
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
					images: [
						{
							id: 1,
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
						},
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
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
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
					images: [
						{
							id: 1,
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
						},
					],
				},
			},
		},
		{
			id: "13",
			title: "Foodie",
			theme: "#EF6433",
			tags: [
				"Angular",
				"Express",
				"Nodejs",
				"Figma",
				"illustrator",
				"VScode",
				"Heroku",
			],
			resource: {
				type: "Github",
				link: "www.resource.com",
				disabled: false,
			},
			demo: "www.demo.com",
			roles: ["Designer", "Developer"],
			collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
			thumbnail:
				"http://uxdev.mo.cloudinary.net/baobab-logo-tile_FLSUP3QQB.png",
			content: {
				overview: {
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
					images: [
						{
							id: 1,
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
						},
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
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
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
					images: [
						{
							id: 1,
							title: "Cover",
							url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
						},
						{
							id: 2,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 3,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
						},
						{
							id: 4,
							title: "Cover",
							url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
						},
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
