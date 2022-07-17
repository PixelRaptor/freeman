<template>
	<div
		class="image-popup"
		v-bind:style="{
			backgroundImage: 'url(' + selectedImage[1][selected].link + ')',
		}"
	>
		<button class="go-left-button" @click="goLeft()">
			<svg
				width="320"
				height="512"
				viewBox="0 0 320 512"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M34.5201 239.03L228.87 44.6901C238.24 35.3201 253.44 35.3201 262.81 44.6901L285.48 67.3601C294.84 76.7201 294.85 91.8801 285.52 101.26L131.49 256L285.51 410.75C294.85 420.13 294.83 435.29 285.47 444.65L262.8 467.32C253.43 476.69 238.23 476.69 228.86 467.32L34.5201 272.97C25.1501 263.6 25.1501 248.4 34.5201 239.03V239.03Z"
				/>
			</svg>
		</button>
		<button class="go-right-button" @click="goRight()">
			<svg
				width="320"
				height="512"
				viewBox="0 0 320 512"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M285.476 272.971L91.132 467.314C81.759 476.687 66.563 476.687 57.191 467.314L34.524 444.647C25.167 435.29 25.149 420.125 34.484 410.746L188.505 256L34.484 101.255C25.149 91.876 25.167 76.711 34.524 67.354L57.191 44.687C66.564 35.314 81.76 35.314 91.132 44.687L285.475 239.03C294.848 248.402 294.848 263.598 285.476 272.971Z"
				/>
			</svg>
		</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "ImagePopup",
	data() {
		return {
			displayImage: this.selectedImage[1][this.selectedImage[0]].link,
			selected: this.selectedImage[0],
		};
	},

	props: ["selectedImage"],

	methods: {
		goRight() {
			let index = this.selected;
			if (index < this.selectedImage[1].length - 1) {
				this.selected = index + 1;
			} else {
				this.selected = 0;
			}
		},
		goLeft() {
			let index = this.selected;
			if (index > 0) {
				this.selected = index - 1;
			} else {
				this.selected = this.selectedImage[1].length - 1;
			}
		},
	},
});
</script>

<style lang="scss" scoped>
.image-popup {
	overflow: hidden;
	position: fixed;
	height: 100vh;
	width: 100%;
	top: 0px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;

	button {
		width: 4rem;
		position: fixed;
		height: 100%;
		background: #fff;
		border: none;
		cursor: pointer;
		&:hover {
			svg {
				height: 2rem;
				width: 2rem;
				fill: var(--white-color);
				opacity: 1;
			}
		}
		&.go-left-button {
			&:hover {
				background: linear-gradient(
					90deg,
					rgba(0, 0, 0, 0.7),
					rgba(0, 0, 0, 0)
				);
			}
			left: 0px;
			background: linear-gradient(
				90deg,
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0)
			);
		}
		&.go-right-button {
			&:hover {
				background: linear-gradient(
					-90deg,
					rgba(0, 0, 0, 0.7),
					rgba(0, 0, 0, 0)
				);
			}
			right: 0px;
			background: linear-gradient(
				-90deg,
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0)
			);
		}
		svg {
			height: 2rem;
			width: 2rem;
			fill: var(--black-color);
			opacity: 0.3;
		}
	}
}
</style>
