<template>
	<div class="photo-carousel">
		<div class="graphic">
			<div
				v-bind:style="{
					backgroundColor: theme,
				}"
				class="graphic_background"
				id="graphic_background"
			></div>
			<img
				id="graphic"
				@click="$emit('click', selected)"
				:src="selected"
				alt=""
				crossorigin="anonymous"
			/>
		</div>
		<div class="thumbnails">
			<div
				@click="setImage(img.url)"
				v-for="(img, index) in images"
				v-bind:class="{
					thumbnail: true,
					selected: img.url == selected,
				}"
				:key="index"
			>
				<img
					id="graphic"
					:src="img.url"
					alt=""
					crossorigin="anonymous"
				/>
				<div
					v-bind:style="{
						backgroundColor: theme,
					}"
					class="graphic_background"
					id="graphic_background"
				></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "PhotoCarousel",
	data() {
		return {
			selected: "",
			color: "ff0066",
		};
	},
	beforeMount() {
		try {
			this.selected = this.images[0].url;
		} catch (e) {}
	},
	methods: {
		setImage(url: string) {
			this.selected = url;
		},
	},
	props: {
		images: {
			type: Array<{id: null;url: "";title: ""}>
		},
		theme: {
			type: String,
			default: "",
		},
	},
	components: {},
});
</script>

<style lang="scss" scoped>
.photo-carousel {
	box-sizing: border-box;
	padding: var(--side-padding);
	padding-top: 1rem;
	.graphic {
		width: 100%;
		height: 50vh;
		display: grid;
		border-radius: var(--border-radius);
		overflow: hidden;
		position: relative;
		margin-bottom: 0.5rem;
		img {
			object-fit: scale-down;
			object-position: center;
			max-width: 100%;
			max-height: 100%;
			margin: auto;
			overflow: hidden;
			z-index: 2;
		}
		.graphic_background {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0px;
			top: 0px;
			opacity: 0.1;
			z-index: 1;
		}
	}

	.thumbnails {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
		grid-gap: 0.5rem;
		.thumbnail {
			height: 6rem;
			max-width: 26rem;
			border-radius: var(--border-radius);
			overflow: hidden;
			background-position: center;
			background-size: cover;
			flex-grow: 0;
			flex-shrink: 0;
			cursor: pointer;
			position: relative;
			display: grid;
			overflow: hidden;
			&.selected {
				box-shadow: inset 0px 0px 0px 2px var(--black-color);
				opacity: 0.6;
			}
			img {
				-o-object-fit: scale-down;
				object-fit: scale-down;
				-o-object-position: center;
				object-position: center;
				max-width: 100%;
				max-height: calc(100% - 6px);
				margin: auto;
				overflow: hidden;
				z-index: 2;
			}
			.graphic_background {
				width: 100%;
				height: 100%;
				position: absolute;
				z-index: -1;
				opacity: 0.1;
			}
		}
	}
}

@media only screen and (min-width: 672px) {
	.photo-carousel {
		.thumbnails {
			display: grid;
			grid-template-columns: repeat(5, minmax(6rem, 1fr));
			grid-gap: 0.5rem;
			.thumbnail {
				height: 6rem;
			}
		}
	}
}

@media only screen and (min-width: 1230px) {
	.photo-carousel {
		.thumbnails {
			display: grid;
			grid-template-columns: repeat(6, minmax(6rem, 1fr));
			grid-gap: 0.5rem;
			.thumbnail {
				height: 6rem;
			}
		}
	}
}
</style>
