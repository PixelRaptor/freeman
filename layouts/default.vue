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
		display: flex;
		justify-content: space-between;
		max-width: 20rem;
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

@media only screen and (min-width: 450px) {
	.layout {
		.router-tabs {
			max-width: 22rem;
			margin: 3rem 0px 1rem;
			.link {
				a {
					&.nuxt-link-active {
					}
				}
			}
		}
	}
}
@media only screen and (min-width: 932px) {
	.layout {
		margin: auto;
		max-width: 900px;
	}
}
@media only screen and (min-width: 1232px) {
	.layout {
		max-width: 1200px;
	}
}
</style>
