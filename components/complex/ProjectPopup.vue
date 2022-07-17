<template>
	<div class="project-popup" id="project">
		<div class="overlay" @click="close()"></div>
		<div class="popup" :class="{ fade: popupImage }">
			<ProjectHeader
				:class="{ small: status }"
				:project="{
					title: project.title,
					theme: project.theme,
					tools: project.tools,
					resource: project.resource,
					demo: project.demo,
					roles: project.roles,
					collaborators: project.collaborators,
				}"
			/>
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
								@click="showImage(index, i.images)"
							/>
						</li>
					</ul>
				</div>
				<div class="wireframes"></div>
				<div class="mockups"></div>
			</div>
		</div>
		<div v-if="popupImage">
			<div class="overlay image-overlay" @click="closeImagePopup()"></div>

			<button class="close-image-popup-button" @click="closeImagePopup()">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M24 2.4L21.6 0L12 9.6L2.4 0L0 2.4L9.6 12L0 21.6L2.4 24L12 14.4L21.6 24L24 21.6L14.4 12L24 2.4Z"
					/>
				</svg>
			</button>
			<ImagePopup
				:selectedImageGroup="selectedImageGroup"
				:selectedImageIndex="selectedImageIndex"
			/>
		</div>
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
			selectedImageIndex: 0,
			selectedImageGroup: [],
			project: {
				id: "12",
				title: "Doitol",
				theme: "#ffdbc1",
				tools: [
					"Angular",
					"Express",
					"Nodejs",
					"Figma",
					"illustrator",
					"VScode",
					"Heroku",
				],
				resource: { type: "Github", link: "www.resource.com" },
				demo: "www.demo.com",
				roles: ["Designer", "Developer"],
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
	},
	methods: {
		setImage(image: any) {
			console.log(image);
			this.image = image;
		},
		showImage(index: any, images: any) {
			console.log(index, images, "thisx");
			this.selectedImageIndex = index;
			this.selectedImageGroup = images;
			this.popupImage = !this.popupImage;
		},

		close() {
			this.$store.commit("closeProjctPopup");
		},
		closeImagePopup() {
			this.selectedImageIndex = 0;
			this.selectedImageGroup = [];
			this.popupImage = !this.popupImage;
		},
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
		background: rgba(17, 17, 17, 0.4);
	}
	.close-image-popup-button {
		position: fixed;
		transform: translateX(-50%);
		left: 50%;
		top: 3rem;
		height: 4rem;
		width: 4rem;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		background: var(--white-color);
		z-index: 9;
		&:hover {
			background: none;
			svg {
				fill: var(--white-color);
			}
		}
		&:active {
			svg {
				fill: var(--black-color);
			}
		}
		svg {
			height: 1.6rem;
			width: 1.6rem;
			margin: auto;
			display: grid;
			fill: var(--black-color);
		}
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
					font-size: 1.2rem;
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
					cursor: pointer;
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
