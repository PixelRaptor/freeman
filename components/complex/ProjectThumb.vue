<template>
	<li class="project-thumb">
		<div class="labels">
			<h2>{{ project.title }}</h2>
			<p>
				<span v-for="item in project.roles" :key="item.id">{{
					item + ", "
				}}</span>
			</p>
		</div>
		<div
			@click="showPopup()"
			class="graphic"
			v-bind:style="{
				backgroundImage: 'url(' + selected + ')',
			}"
		></div>
		<div class="thumbnails">
			<div
				@click="setImage(project.thumbnail)"
				v-bind:style="{
					backgroundImage: 'url(' + project.thumbnail + ')',
				}"
				v-bind:class="{
					thumbnail: true,
					selected: project.thumbnail == selected,
				}"
			></div>
			<div
				@click="setImage(img.url)"
				v-for="img in project.content.solution.images"
				v-bind:style="{
					backgroundImage: 'url(' + img.url + ')',
				}"
				v-bind:class="{
					thumbnail: true,
					selected: img.url == selected,
				}"
				:key="img.id"
			></div>
		</div>
	</li>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
export default Vue.extend({
	name: "ProjectThumb",
	props: {
		project: {
			type: Object,
		},
	},
	data() {
		return {
			selected: "",
			image: {},
			images: [
				{
					link: "https://ik.imagekit.io/uxdev/baobab-logo-tile_FLSUP3QQB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657737094844",
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
		try {
			this.selected = this.project.thumbnail;
		} catch (e) {}
	},
	methods: {
		setImage(url: string) {
			this.selected = url;
		},
		showPopup() {
			this.showProjectPopup(this.project);
		},
		...mapMutations(["showProjectPopup"]),
	},
});
</script>

<style lang="scss" scoped>
.project-thumb {
	margin-bottom: 1rem;

	.labels {
		text-align: left;
		h2 {
			font-weight: 700;
			font-size: 1.56rem;
			line-height: 1.5;
		}
		p {
			font-weight: 500;
			font-size: 1rem;
			line-height: 1.3;
		}
	}
	.graphic {
		cursor: pointer;
		background: var(--grey-color);
		height: 15rem;
		margin-top: 0.8rem;
		border-radius: var(--border-radius);
		background-position: center;
		background-size: cover;
	}
	.thumbnails {
		display: flex;
		overflow: scroll;
		.thumbnail {
			height: 3.5rem;
			width: 5rem;
			background: var(--grey-color);
			margin-top: 0.31rem;
			border-radius: var(--border-radius);
			overflow: hidden;
			margin-right: 0.31rem;
			background-position: center;
			background-size: cover;
			flex-grow: 0;
			flex-shrink: 0;
			cursor: pointer;
			&.selected {
				box-shadow: inset 0px 0px 0px 1px var(--black-color);
				opacity: 0.6;
			}
		}
	}
}

@media only screen and (min-width: 672px) {
	.project-thumb {
		margin-bottom: 0rem;
		.graphic {
			height: 16rem;
		}
		.thumbnails {
			width: 45vw;
		}
	}
}

@media only screen and (min-width: 930px) {
	.project-thumb {
		.graphic {
			height: 16rem;
		}
		.thumbnails {
			width: 27.4rem;
		}
	}
}
@media only screen and (min-width: 1232px) {
	.project-thumb {
		.graphic {
			height: 22rem;
		}
		.thumbnails {
			width: 36rem;
		}
	}
}
</style>
