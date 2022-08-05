<template>
	<div class="project-popup" id="project">
		<div class="overlay" @click="close()"></div>
		<div class="popup" :class="{ fade: popupImage }">
			<ProjectHeader
				:class="{ small: status }"
				:project="{
					title: project.title,
					theme: project.theme,
					tags: project.tags,
					resource: project.resource,
					demo: project.demo,
					roles: project.roles,
					collaborators: project.collaborators,
				}"
			/>
			<div class="content">
				<div class="section" v-for="i in project.content" :key="i.id">
					<div v-if="i.passage" class="text">
						<h2>{{ i.section }}</h2>
						<p v-for="p in i.passage" :key="p.id">{{ p }}</p>
					</div>
					<ul v-if="i.images" class="photo-carousel">
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
			<div class="bottom-navigation">
				<button class="view-next-project">
					<span class="label">Cinema3</span>
					<span class="icon"
						><svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.6 3.4L16.2 9H0V11H16.2L10.6 16.6L12 18L20 10L12 2L10.6 3.4Z"
								fill="black"
							/>
						</svg>
					</span>
				</button>
			</div>
			<div class="clearfix"></div>
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
			<ProjectImagePopup
				:selectedImageGroup="selectedImageGroup"
				:selectedImageIndex="selectedImageIndex"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import LinkButton from "../basic/LinkButton.vue";
import ProjectHeader from "./ProjectHeader.vue";
import ProjectImagePopup from "./ProjectImagePopup.vue";
import { mapGetters } from "vuex";
export default Vue.extend({
	name: "ProjectPopup",
	data() {
		return {
			image: {},
			status: false,
			popupImage: false,
			selectedImageIndex: 0,
			selectedImageGroup: [],
			project: {},
		};
	},
	beforeMount() {
		this.project = this.getSelectedProject;
	},
	methods: {
		showImage(index: any, images: any) {
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
	computed: {
		// mix the getters into computed with object spread operator
		...mapGetters([
			"getSelectedProject",
			// ...
		]),
	},
	components: { LinkButton, ProjectHeader, ProjectImagePopup },
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
	.popup {
		padding-bottom: 2rem;
		&.fade {
			opacity: 0.2;
		}
		.content {
			padding-top: 0.5rem;
			padding-bottom: 2rem;
			.section {
				padding-top: 1.5rem;
				text-align: left;
				.text {
					/*padding: var(--side-padding);*/
					padding: var(--side-padding);
					h2 {
						font-weight: 700;
						font-size: 1.5rem;
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
	.view-next-project {
		background: transparent;
		border: none;
		display: grid;
		grid-template-columns: 1fr 2rem;
		grid-gap: 1rem;
		float: right;
		margin-right: 1rem;
		color: var(--black-color);
		cursor: pointer;
		&:hover {
			.label {
				text-decoration: underline;
			}
			.icon {
				animation-name: floating;
				animation-duration: 3s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-in-out;
			}

			@keyframes floating {
				from {
					transform: translateX(0px);
				}
				65% {
					transform: translateX(1rem);
				}
				to {
					transform: translateX(-0rem);
				}
			}
		}
		.label {
			font-weight: 700;
			font-size: 2rem;
		}
		.icon {
			display: grid;
			svg {
				width: 2rem;
				height: 2rem;
				margin: auto;
			}
		}
	}
	.clearfix {
		clear: both;
	}
}

@media only screen and (min-width: 672px) {
	.view-next-project {
	}
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
							height: 19rem;
						}
					}
				}
			}
		}

		.view-next-project {
			margin-right: 2.62rem;
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

						img {
							height: 24rem;
						}
					}
				}
			}
		}
	}
}
</style>
