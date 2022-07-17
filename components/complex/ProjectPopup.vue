<template>
	<div class="project-popup" id="project">
		<div class="overlay" @click="close()"></div>
		<div class="popup" :class="{ fade: popupImage }">
			<ProjectHeader :class="{ small: status }" />
			<div class="content">
				<div class="section" v-for="i in project.content" :key="i.id">
					<div class="text">
						<h2>{{ i.section }}</h2>
						<p v-for="p in i.passage" :key="p.id">{{ p }}</p>
					</div>
					<ul class="photo-carousel">
						<li v-for="(img, index) in i.images" :key="img.id">
							<img
								:src="img.url"
								:alt="img.title"
								srcset=""
								@click="showImage(index, images)"
							/>
						</li>
					</ul>
				</div>
				<div class="wireframes"></div>
				<div class="mockups"></div>
			</div>
		</div>
		<div
			v-if="popupImage"
			class="overlay image-overlay"
			@click="closeImagePopup()"
		></div>
		<ImagePopup v-if="popupImage" :selectedImage="selectedImage" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import LinkButton from "../basic/LinkButton.vue";
import ImagePopup from "./ImagePopup.vue";
import ProjectHeader from "./ProjectHeader.vue";
export default Vue.extend({
	name: "ProjectPopup",
	data() {
		return {
			image: {},
			status: false,
			popupImage: false,
			selectedImage: [],
			images: [
				{
					link: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
					id: 1,
				},
				{
					link: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
					id: 2,
				},
				{
					link: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
					id: 3,
				},
				{
					link: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
					id: 4,
				},
				{
					link: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
					id: 5,
				},
				{
					link: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
					id: 6,
				},
			],
			project: {
				section: "header",
				title: "Doitol",
				tools: [
					"Angular",
					"Express",
					"Nodejs",
					"Figma",
					"illustrator",
					"VScode",
					"Heroku",
				],
				resource: { type: "github", link: "www.resource.com" },
				demo: "www.demo.com",
				resources: ["Designer", "Developer"],
				collaborators: [
					{ name: "Bakani Pilime", id: "bmpz@github.com" },
				],
				content: [
					{
						section: "overview",
						passage: [
							"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
							"How did the problem arise",
							"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
							"Why is this problem significant?",
						],
						images: [
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
							},
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
							},
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
							},
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
							},
						],
					},
					{
						section: "solution",
						passage: [
							"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
							"How did the problem arise",
							"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
							"Why is this problem significant?",
						],
						images: [
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
							},
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
							},
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
							},
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
							},
						],
					},
					{
						section: "results",
						passage: [
							"For the challenge or problem statement, state the key issue that the challenge/problem is impacting the user.",
							"How did the problem arise",
							"Tell about your user and what they’re experiencing or challenged? (Such as Pain Points)",
							"Why is this problem significant?",
						],
						images: [
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/userupload/2901743/file/original-bf2ab5392f3e8b6c14a3c6e5c1f71fed.png?compress=1&resize=1600x1200",
							},
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/users/4189231/screenshots/17513391/media/ddd43ee3ba024f4848274c0e3aa68e94.png?compress=1&resize=1600x1200&vertical=top",
							},
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/users/4189231/screenshots/17570234/media/48fa9fc2ab3a6a21862428ae047b524a.png?compress=1&resize=1600x1200&vertical=top",
							},
							{
								id: "logo cover image",
								title: "Cover",
								url: "https://cdn.dribbble.com/users/4189231/screenshots/17532369/media/a6dadd4c8ef9e9eab31a8c8f2db5e1ae.png?compress=1&resize=1600x1200&vertical=top",
							},
						],
					},
				],
			},
		};
	},

	mounted() {
		console.log("yn");
		this.image = this.images[0];
		// window.document
		// 	.getElementById("project")
		// 	.addEventListener("scroll", this.updatePageHeight);
	},
	methods: {
		setImage(image: any) {
			console.log(image);
			this.image = image;
		},
		showImage(index: any, images: any) {
			console.log(index, images);
			this.selectedImage = [index, images];
			this.popupImage = !this.popupImage;
		},

		close() {
			this.$store.commit("closeProjctPopup");
		},
		closeImagePopup() {
			this.selectedImage = [];
			this.popupImage = !this.popupImage;
		},
		// updatePageHeight() {
		// 	try {
		// 		if (window.document.getElementById("project").scrollTop > 200) {
		// 			this.status = true;
		// 			console.log("yebo");
		// 		} else if (
		// 			window.document.getElementById("project").scrollTop < 100
		// 		) {
		// 			this.status = false;
		// 		} else {
		// 			this.status = this.status;
		// 		}
		// 	} catch (e) {}
		// },
	},
	components: { LinkButton, ProjectHeader, ImagePopup },
});
</script>

<style lang="scss" scoped>
.project-popup {
	position: fixed;
	top: 0px;
	left: 0px;
	background: var(--white-color);
	height: 100vh;
	width: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
	.popup.fade {
		opacity: 0.2;
	}
	.image-overlay {
		top: 0px;
		height: 100vh;
		width: 100vw;
		position: fixed;
	}
	.content {
		padding-top: 0.5rem;
		padding-bottom: 4rem;
		.section {
			padding-top: 1rem;
			text-align: left;
			.text {
				/*padding: var(--side-padding);*/
				padding: var(--side-padding);
				h2 {
					font-weight: 700;
					font-size: 1.56rem;
					margin-bottom: 0.3rem;
					text-transform: capitalize;
				}
				ul {
					/*list-style: inside;*/
				}
			}
			.photo-carousel {
				display: flex;
				overflow-x: scroll;
				padding: var(--side-padding);
				padding-top: 1rem;
				img {
					height: 16rem;
					margin-right: 0.5rem;
					border-radius: 2px;
				}
			}
		}
	}
}

@media only screen and (min-width: 672px) {
}

@media only screen and (min-width: 932px) {
	.project-popup {
		.overlay {
			background: rgb(17 17 17 / 40%);
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0px;
			left: 0px;
		}
		.popup {
			width: 56.25rem;
			position: relative;
			transform: translateX(-50%);
			left: 50%;
			top: 5rem;
			background: var(--white-color);

			.content {
				.section {
					.text {
						padding: 0px 2.62rem;
					}
					.photo-carousel {
						width: calc(100vw - ((100vw - 56.25rem) / 2) - 4rem);
						padding: 1rem 2.62rem 0px;
						img {
							height: 23rem;
						}
					}
				}
			}
		}
		.image-popup {
			height: 70vh;
			position: fixed;
			width: 56.25rem;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
			background: var(--white-color);
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			border-radius: var(--border-radius);
		}
	}
}
@media only screen and (min-width: 1232px) {
	.project-popup {
		.popup {
			width: 75rem;
			.content {
				.section {
					.photo-carousel {
						width: calc(100vw - ((100vw - 75rem) / 2) - 4rem);
						padding: 1rem 2.62rem 0px;
						img {
							height: 30rem;
						}
					}
				}
			}
		}
	}
}
</style>
