<template>
	<div class="project-header">
		<div class="top">
			<BackButton @click="close()" />
			<h1>Doitol</h1>
		</div>
		<div class="left">
			<p>Angular, Express, Nodejs, Figma, illustrator, VScode,Heroku</p>
			<div class="buttons">
				<LinkButton link="www" label="View Protoype" />
				<div class="gap"></div>
				<LinkButton link="www" label="Launch Demo" />
			</div>
		</div>
		<ul class="right">
			<li class="detail">
				<span class="label">Roles</span>
				<span class="value">Designer, Developer</span>
			</li>
			<li class="detail">
				<span class="label">Project duration</span>
				<span class="value">January 2021 - August 2021 </span>
			</li>
		</ul>
		<div class="background">
			<div class="overlay"></div>
			<div class="graphic">
				<svg
					viewBox="0 0 980 301"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.4">
						<path
							opacity="0.4"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M498.28 -130.851L656.679 150.417L498.28 431.684H323.434L481.493 151.002V149.831L323.434 -130.851L498.564 -131.771H322.13L480.983 150.417L322.13 432.604H498.564L657.417 150.417L498.28 -130.851Z"
							fill="white"
						/>
					</g>
					<g opacity="0.4">
						<path
							opacity="0.4"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M710.897 -130.851L869.24 150.417L710.897 431.684H536.051L694.11 151.002V149.831L536.051 -130.851L711.181 -131.771H534.803L693.656 150.417L534.803 432.604H711.237L870.09 150.417L710.897 -130.851Z"
							fill="white"
						/>
					</g>
					<g opacity="0.4">
						<path
							opacity="0.4"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M72.9329 -130.851L231.275 150.417L72.9329 431.768H-101.913L56.1458 151.002V149.831L-101.913 -130.851L73.2164 -131.771H-103.218L55.6354 150.417L-103.218 432.604H73.2164L232.069 150.417L72.9329 -130.851Z"
							fill="white"
						/>
					</g>
					<g opacity="0.4">
						<path
							opacity="0.4"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M285.606 -130.851L443.949 150.417L285.606 431.768H110.76L268.819 151.085V149.915L110.76 -130.851L285.89 -131.771H109.456L268.309 150.417L109.456 432.604H285.89L444.743 150.417L285.606 -130.851Z"
							fill="white"
						/>
					</g>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M692.465 -130.851L850.865 150.417L692.465 431.768H517.619L675.678 151.085V149.915L517.619 -130.851L692.749 -131.771H516.315L675.168 150.417L516.315 432.604H692.749L851.602 150.417L692.465 -130.851Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M905.139 -130.851L1063.48 150.417L905.139 431.768H730.293L888.352 151.085V149.915L730.293 -130.851L905.422 -131.771H728.988L887.841 150.417L728.988 432.604H905.422L1064.28 150.417L905.139 -130.851Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M267.175 -130.851L425.517 150.417L267.175 431.768H92.3287L250.388 151.085V149.915L92.3287 -130.851L267.458 -131.771H91.0243L249.877 150.417L91.0243 432.604H267.458L426.311 150.417L267.175 -130.851Z"
						fill="white"
					/>
					<mask
						id="mask0_61_123"
						style="mask-type: alpha"
						maskUnits="userSpaceOnUse"
						x="-104"
						y="-134"
						width="1169"
						height="569"
					>
						<path
							d="M1064.33 -133.694H-103.218V434.611H1064.33V-133.694Z"
							fill="black"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M304.322 432.186L462.948 150.5L304.322 -131.269H479.962L638.588 150.417L479.962 432.102H304.322V432.186Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask0_61_123)">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M304.322 432.186L462.948 150.5L304.322 -131.269H479.962L638.588 150.417L479.962 432.102H304.322V432.186Z"
							stroke="white"
							stroke-width="2"
						/>
					</g>
				</svg>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import LinkButton from "../basic/LinkButton.vue";
import BackButton from "../basic/BackButton.vue";
export default Vue.extend({
	name: "ProjectHeader",
	data() {
		return {
			image: {},
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
	beforeMount() {
		this.image = this.images[0];
	},
	methods: {
		setImage(image: any) {
			this.image = image;
		},
		close() {
			this.$store.commit("closeProjctPopup");
		},
	},
	components: { LinkButton, BackButton },
});
</script>

<style lang="scss" scoped>
.project-header {
	position: relative;
	padding: var(--side-padding);
	padding-top: 2.5rem;
	padding-bottom: 1.5rem;
	text-align: left;
	position: sticky;
	top: 0px;
	z-index: 1;
	&.small {
		padding-top: 1.5rem;
		padding-bottom: 0.5rem;
		.top {
			h1 {
				font-size: 2.44rem;
				padding: 0.5rem 0;
			}
		}
		.left,
		.right {
			display: none;
		}
	}
	.top {
		h1 {
			font-size: 3.44rem;
			line-height: 1.2;
			padding: 1rem 0 0.5rem;
		}
	}
	.left {
		p {
			color: var(--grey-color);
			padding-bottom: 1rem;
		}
		.buttons {
			display: flex;
			.gap {
				width: 0.6rem;
			}
		}
	}
	.right {
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1rem;
		padding-top: 1.2rem;
		.detail {
			display: grid;
			grid-gap: 0.3rem;
			.label {
				font-weight: 800;
				font-size: 1rem;
				text-transform: uppercase;
				color: var(--black-color);
			}
			.value {
				font-weight: 500;
				font-size: 1rem;
				color: #000000;
			}
		}
	}
	.background {
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: -1;
		height: 100%;
		width: 100%;
		.overlay {
			background: linear-gradient(
				180deg,
				rgba(255, 219, 193, 0) 0%,
				#ffdbc1 52.08%
			);

			position: absolute;
			height: 100%;
			width: 100%;
			z-index: 1;
		}
		.graphic {
			background: #ffdbc1;
			height: 100%;
			position: relative;
			svg {
				height: 100%;
				position: absolute;
				transform: translate(-50%, -50%);
				top: 50%;
				left: 50%;
			}
		}
	}
}

@media only screen and (min-width: 450px) {
	.project-header {
		display: flex;
		grid-template-columns: 1fr 1fr;
		flex-wrap: wrap;
		.top {
			flex-grow: 2;
			flex-shrink: 0;
			width: 100%;
		}
		.left {
			flex-shrink: 0;
			flex-grow: 0;
			width: 50%;
			padding-right: 1rem;
			box-sizing: border-box;
		}
		.right {
			flex-shrink: 0;
			flex-grow: 0;
			width: 50%;
			padding-top: 0.3rem;
		}
	}
}

@media only screen and (min-width: 930px) {
	.project-header {
		padding: 0px 2.62rem;
		padding-top: 2.62rem;
		padding-bottom: 2.62rem;
		position: relative;
		&.small {
			padding: 0px 2.62rem;
			padding-top: 2.62rem;
			padding-bottom: 2.62rem;
			position: relative;
			.top {
				h1 {
					font-size: 3.44rem;
					line-height: 1.2;
					padding: 1rem 0 0.5rem;
				}
			}
			.left,
			.right {
				display: grid;
			}
		}
		.left {
			padding-right: 10rem;
		}
	}
}
</style>
