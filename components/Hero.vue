<!-- Please remove this file from your project -->
<template>
	<div class="hero">
		<div class="text">
			<h1>
				<span class="outline-text">Hello!</span> I am <br />
				Freeman Sibanda
			</h1>
			<p>
				If you are looking for someone to design or develop an enjoyable
				expirience for your next website, mobile or web app? Then am the
				developer you are looking for
			</p>
			<div class="get-intouch">
				<a href="mailto:">Get in touch</a><span>me@ux.dev</span>
			</div>
		</div>

		<div class="profile-photos mobile-hidden">
			<img v-for="photo in photos" :key="photo" :src="photo" alt="" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "Hero",
	data() {
		return {
			photos: [
				"https://ik.imagekit.io/uxdev/image-1_IuGq8JsVO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650918246101",
				"https://ik.imagekit.io/uxdev/image-2_6eOYUeIyK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650918247575",
				"https://ik.imagekit.io/uxdev/image-3_52Srpq0EC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650918240394",
				"https://ik.imagekit.io/uxdev/image-4_-ev1yLh_F.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1650918235427",
			],
		};
	},
});
</script>

<style lang="scss" scoped>
.hero {
	margin-top: 4rem;
	.text {
		h1 {
			text-align: left;
			font-weight: 700;
			font-size: 2.81rem;
			line-height: 1.3;
			.outline-text {
				font-weight: 600;
				color: transparent;
				-webkit-text-stroke: 1px #333;
				-webkit-text-stroke-color: #000;
			}
		}
		p {
			padding-bottom: 1.93rem;
		}
		.get-intouch {
			text-align: left;
			a {
				font-weight: 700;
				text-decoration-line: underline;
				color: var(--black-color);
			}
			span {
				color: var(--grey-color);
				font-weight: 500;
				margin-left: 1em;
			}
		}
	}

	.profile-photos {
		font-size: 2.1rem;
		position: relative;
		height: 9em;

		* {
			position: absolute;
			border: 2px solid var(--white-color);
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
			border-radius: var(--border-radius);
		}
		:nth-child(1) {
			width: 6em;
			left: 0px;
		}
		:nth-child(2) {
			width: 5em;
			right: 0px;
			bottom: 0px;
		}
		:nth-child(3) {
			width: 3.5em;
			left: 1.2em;
			bottom: 0.5em;
		}
		:nth-child(4) {
			width: 3.1em;
			right: 0.8em;
			top: 0.3em;
		}
	}
}

@media only screen and (max-width: 672px) {
	.profile-photos {
		display: none;
	}
}
@media only screen and (min-width: 672px) {
	.hero {
		margin-top: 5.88rem;
		display: grid;
		grid-template-columns: 65% 35%;
		.text {
			margin-top: 1.5rem;
			padding-right: 2rem;
		}
		.profile-photos {
		}
	}
}

@media only screen and (min-width: 930px) {
	.hero {
		.text {
			padding-right: 3rem;
		}
	}
}

@media only screen and (min-width: 1232px) {
	.hero {
		.text {
			margin-top: 5rem;
		}
		.profile-photos {
			font-size: 3rem;
			margin-top: 0rem;
		}
	}
}
</style>
