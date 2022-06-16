<template>
	<div class="layout" id="body">
		<TopBar />
		<Hero />
		<ul class="router-tabs">
			<!-- <li class="link">
				<nuxt-link to="/">All</nuxt-link>
			</li> -->
			<li class="link">
				<nuxt-link to="/design">Design</nuxt-link>
			</li>
			<li class="link">
				<nuxt-link to="/development">Development</nuxt-link>
			</li>
			<li class="link">
				<nuxt-link to="/about">About me</nuxt-link>
			</li>
		</ul>
		<div class="line"></div>
		<Nuxt />
		<PageFooter />
		<ProjectPopup class="" v-if="$store.state.showProject" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import TopBar from "~/components/TopBar.vue";
import PageFooter from "~/components/complex/PageFooter.vue";
import ProjectPopup from "~/components/complex/ProjectPopup.vue";

export default Vue.extend({
	name: "LayoutPage",
	components: { TopBar, PageFooter, ProjectPopup },
});
</script>

<style lang="scss" scoped>
.layout {
	padding: var(--side-padding);
	.router-tabs {
		display: grid;
		grid-template-columns: 4rem 7rem 5rem;
		grid-gap: 2rem;
		list-style: none;
		margin: 4rem 0px 1rem;

		.link {
			text-align: left;
			a {
				text-decoration: none;
				&.nuxt-link-active {
					text-decoration: underline;
					text-underline-offset: 1rem;
				}
			}
		}
	}
}
</style>
