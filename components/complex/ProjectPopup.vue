<template>
	<div class="project-popup" id="project">
		<div class="popup">
			<ProjectHeader :class="{ small: status }" />
			<div class="content">
				<div class="section" v-for="i in 3">
					<div class="text">
						<h2>Overview</h2>
						<p>
							For the challenge or problem statement, state the
							key issue that the challenge/problem is impacting
							the user.
						</p>
						<ul>
							<li><p>How did the problem arise?</p></li>
							<li>
								<p>
									Tell about your user and what they’re
									experiencing or challenged? (Such as Pain
									Points)
								</p>
							</li>
							<li><p>Why is this problem significant?</p></li>
						</ul>
					</div>
					<ul class="photo-carousel">
						<li v-for="img in images">
							<img :src="img.link" alt="" srcset="" />
						</li>
					</ul>
				</div>
				<div class="wireframes"></div>
				<div class="mockups"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import LinkButton from "../basic/LinkButton.vue";
import ProjectHeader from "./ProjectHeader.vue";
export default Vue.extend({
	name: "ProjectPopup",
	data() {
		return {
			image: {},
			status: false,
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
	components: { LinkButton, ProjectHeader },
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
	.content {
		padding-top: 0.5rem;
		padding-bottom: 4rem;
		.section {
			padding-top: 2rem;
			text-align: left;
			.text {
				/*padding: var(--side-padding);*/
				padding: var(--side-padding);
				h2 {
					font-weight: 700;
					font-size: 1.56rem;
					margin-bottom: 0.3rem;
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
					height: 17rem;
					margin-right: 0.5rem;
					border-radius: 2px;
				}
			}
		}
	}
}

@media only screen and (min-width: 450px) {
}

@media only screen and (min-width: 930px) {
	.project-popup {
		background: rgb(17 17 17 / 40%);
		.popup {
			width: 75rem;
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
@media only screen and (min-width: 1232px) {
}
</style>
