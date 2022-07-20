<template>
	<div class="about">
		<div class="bio">
			<p>
				Hey there, I'm Freeman!. I'm a UX Designer/Engineer with a
				strong focus on responsive design, performance, and
				accessibility. Throughout my career I have collaborated with
				individuals and teams to build experiences for brands and
				startups accross multiple platforms including Mobile Apps, Web
				Apps, Data Visualisation, Typeface and Motion design.
			</p>
			<br />
			<p>
				Newest Product:<a
					class="interest-link"
					target="blank"
					href="https://strapi.io/"
				>
					Strapi (Give it a shot!)</a
				>
			</p>
			<p>
				Currently Listening To:
				<a
					class="interest-link"
					target="blank"
					href="https://open.spotify.com/track/4kEnkZNhu3soks1CLXfxKq?si=0a3ba4928c5e4c6f"
				>
					Nayi Ingozi, TOSS</a
				>
			</p>
			<br />
			<p>Want to learn more? Let's connect!</p>

			<ul class="links">
				<li><a href="mailto:">Email</a></li>
				<li><a href="">LinkedIn</a></li>
				<li><a href="">Instagram</a></li>
				<li><a href="">Spotify</a></li>
			</ul>
		</div>
		<div class="line"></div>
		<div class="gallery">
			<h2>Memories</h2>
			<ul class="photo-grid">
				<Photo
					v-for="image in gallery"
					:image="image"
					:key="image.id"
				/>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Photo from "~/components/basic/Photo.vue";

export default Vue.extend({
	name: "AboutPage",
	data() {
		return {
			gallery: [
				{
					link: "https://ik.imagekit.io/uxdev/safari_x9Sko2SJf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650916428329",
					text: "On a game drive in hwange",
					id: 1,
				},
				{
					link: "https://ik.imagekit.io/uxdev/boma_EmCzEXSdW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650916430080",
					text: "Dancing at the boma",
					id: 2,
				},
				{
					link: "https://ik.imagekit.io/uxdev/skywalk_GGCmGwwEQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650916096108",
					text: "Skywalking in nyanga",
					id: 3,
				},
				{
					link: "https://ik.imagekit.io/uxdev/quadbiking_FV3T2Uq7B.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650916428058",
					text: "Quad biking at the sand dunes",
					id: 4,
				},
				{
					link: "https://ik.imagekit.io/uxdev/peak_aDCX4PDIn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650916417816",
					text: "Hiking the devil's peak",
					id: 5,
				},
				{
					link: "https://ik.imagekit.io/uxdev/hiking__mWqGp7q-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650916429922",
					text: "Hiking table moutain",
					id: 6,
				},
			],
		};
	},
	components: { Photo },
});
</script>

<style lang="scss" scoped>
.about {
	padding-top: 1.38rem;
	.bio {
		.links {
			display: flex;
			justify-content: space-between;
			max-width: 100%;
			margin: 1.25rem 0px 2.5rem;

			a {
				font-weight: 500;
				font-size: 1rem;
				line-height: 1.88rem;
				color: var(--scheme-color);
			}
		}
	}
	.gallery {
		padding-top: 1.38rem;
		text-align: left;
		.photo-grid {
			padding-top: 1.38rem;
		}
	}
}

a.interest-link {
	font-weight: 500;
	color: var(--scheme-color);
	text-decoration: none;
}
@media only screen and (min-width: 672px) {
	.about {
		.bio {
			.links {
				max-width: 20rem;
			}
		}
		.gallery {
			.photo-grid {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 1rem;
				.photo {
					height: 18rem;
					margin-bottom: 0rem;
				}
			}
		}
	}
}

@media only screen and (min-width: 930px) {
	.about {
		.bio {
			max-width: 50rem;
			.links {
			}
		}
	}
}
@media only screen and (min-width: 1232px) {
	.about {
		.bio {
			max-width: 50rem;
			.links {
			}
		}
		.gallery {
			.photo-grid {
				grid-template-columns: 1fr 1fr 1fr;
				.photo {
					height: 20rem;
					margin-bottom: 0rem;
				}
			}
		}
	}
}
</style>
