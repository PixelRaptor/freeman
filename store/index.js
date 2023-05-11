export const state = () => ({
	projects: [
		{
			id: "1",
			title: "Afya Pap Blog",
			theme: "#F19B3E",
			tags: ["nuxtjs", "nodejs", "figma", "typescript", "vscode", "scss"],
			resource: {
				type: "Figma",
				link: null,
				disabled: true,
			},
			demo: {
				type: "Web App",
				link: "https://blog.afyapap.com/",
				disabled: false,
			},
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
						// "- Dynamic links that would open the mobile app if you already have it installed, otherwise it would just route you to the article web page",
						// "- Shareable web links with dynamic meta tags",
					],
				},
				solution: {
					section: "solution",
					passage: [
						"We creeated a new design system for the web as there was already a plan to bring the whole app to the web at in future while design the web app, and the design was done on Figma, then created interactive prototypes using Origami studio.",
						"On the development side the main things we had to consider when comming up with the solution for this project were the frontend framework, media optimisation and hosting. ",
						// "- For the frontend framework we decided to use Nuxtjs, a JavaScript library based on Vue.js. We chose it because it has Server Side Rendering and Dynamic Meta, which allowed us to display key information when sharing articles on social media. It also came with a posiitive impact on the SEO",
						// "- This was going to be an image heavy product, so the implementation of media optimisation was important. This was implemented by using cloudinary ",
						// "- We had a couple of options for hosting but we ended up setting up our own server, main reason being Server Side Rendering",
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
			id: "2",
			title: "Shumba Money",
			theme: "#CE0E2D",
			tags: ["ios", "android", "figma", "illustrator", "kotlin", "swift"],
			resource: {
				type: "Github",
				link: "www.resource.com",
				disabled: false,
			},
			demo: {
				type: "App Store",
				link: "https://apps.apple.com/za/app/shumba-money/id1603449415",
				disabled: false,
			},
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
							url: "https://uxdev.mo.cloudinary.net/shumba-money-frame-1",
						},
						{
							id: 2,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/shumba-money-frame-2",
						},
						{
							id: 3,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/shumba-money-frame-3",
						},
						{
							id: 4,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/shumba-money-frame-4",
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
			id: "3",
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
			demo: {
				type: "Web App",
				link: "www.demo.com",
				disabled: false,
			},
			roles: ["designer", "developer"],
			collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
			thumbnail: "https://uxdev.mo.cloudinary.net/dstv_yl9E_oLYj.png",
			content: {
				overview: {
					section: "overview",
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
				},
				solution: {
					section: "solution",
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
							url: "https://uxdev.mo.cloudinary.net/dstv-frame-1.jpg",
						},
						{
							id: 2,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/dstv-frame-2.jpg",
						},
						{
							id: 3,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/dstv-frame-3.jpg",
						},
						{
							id: 4,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/dstv-frame-4.jpg",
						},
						{
							id: 5,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/dstv-frame-5.jpg",
						},
						{
							id: 6,
							title: "",
							url: "https://uxdev.mo.cloudinary.net/dstv-frame-6.jpg",
						},
					],
				},
				results: {
					section: "results",
					passage: [
						"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
						"How did the problem arise",
						"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
						"Why is this problem significant?",
					],
				},
			},
		},
		// {
		// 	id: "4",
		// 	title: "Fuddy",
		// 	theme: "#F19B3E",
		// 	tags: ["react", "nodejs", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [
		// 		{ name: "Bakani Pilime", id: "bmpz@github.com" },
		// 		{
		// 			name: "Allen Kawanzaruwa",
		// 			id: "https://gitlab.com/allen.kawanzaruwa",
		// 		},
		// 	],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "5",
		// 	title: "Chillax",
		// 	theme: "#B71717",
		// 	tags: ["nextjs", "react", "figma", "javascript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/chillax.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "6",
		// 	title: "TrusBank",
		// 	theme: "#01AAAD",
		// 	tags: ["nuxtjs", "vue", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/trusbank.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "7",
		// 	title: "Odior",
		// 	theme: "#20D762",
		// 	tags: ["nuxtjs", "vue", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/odior.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "8",
		// 	title: "Cinema3",
		// 	theme: "#888888",
		// 	tags: ["nextjs", "react", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/cinema3.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "9",
		// 	title: "Health plus",
		// 	theme: "#DEDEDE",
		// 	tags: ["nuxtjs", "vue", "figma", "javascript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/health-plus.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "10",
		// 	title: "Liquid",
		// 	theme: "#0077C8",
		// 	tags: ["nextjs", "react", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/liquid.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "11",
		// 	title: "Munch",
		// 	theme: "#F35A5A",
		// 	tags: ["nextjs", "react", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/munch.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "12",
		// 	title: "Ate",
		// 	theme: "#FF886C",
		// 	tags: ["nextjs", "react", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/ate.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "13",
		// 	title: "Doitol",
		// 	theme: "#0085FF",
		// 	tags: ["nextjs", "react", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/doitol.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "14",
		// 	title: "Rova",
		// 	theme: "#DEDEDE",
		// 	tags: ["nextjs", "react", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/rova.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "15",
		// 	title: "Sendit",
		// 	theme: "#604685",
		// 	tags: ["nextjs", "react", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/sendit.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
		// {
		// 	id: "16",
		// 	title: "Meteo",
		// 	theme: "#EAD51E",
		// 	tags: ["nextjs", "react", "figma", "typescript", "vscode", "scss"],
		// 	resource: {
		// 		type: "Figma",
		// 		link: "www.resource.com",
		// 		disabled: true,
		// 	},
		// 	demo: {
		// 		type: "Web App",
		// 		link: "www.demo.com",
		// 		disabled: false,
		// 	},
		// 	roles: ["developer", "designer"],
		// 	collaborators: [{ name: "Bakani Pilime", id: "bmpz@github.com" }],
		// 	thumbnail: "https://uxdev.mo.cloudinary.net/meteo.png",
		// 	content: {
		// 		overview: {
		// 			section: "overview",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 		},
		// 		solution: {
		// 			section: "solution",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-1_tkhX2TRRG.jpg",
		// 				},
		// 				{
		// 					id: 2,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2_bWFQZe9gI.jpg",
		// 				},
		// 				{
		// 					id: 3,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-blog-frame-2-desktop_TM6F5KFTj.jpg",
		// 				},
		// 				{
		// 					id: 4,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-health-articles-frame-1_hsq9qR9sp.jpg",
		// 				},
		// 				{
		// 					id: 5,
		// 					title: "",
		// 					url: "https://uxdev.mo.cloudinary.net/afya-pap-health-articles-desktop-4_g2Tg9a8AL.png",
		// 				},
		// 			],
		// 		},
		// 		results: {
		// 			section: "results",
		// 			passage: [
		// 				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		// 			],
		// 			images: [
		// 				{
		// 					id: 1,
		// 					title: "Cover",
		// 					url: "https://uxdev.mo.cloudinary.net/fuddy.png",
		// 				},
		// 			],
		// 		},
		// 	},
		// },
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
