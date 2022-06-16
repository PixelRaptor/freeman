<template>
	<nuxt-link :to="routeprefix + value.id" class="pill">
		{{ value.label }} ({{ value.count }})</nuxt-link
	>
</template>

<script>
export default {
	name: "Pill",
	props: {
		value: {
			type: Object,
			default: {
				label: "Label",
				count: 2,
			},
		},
		routeprefix: {
			type: String,
			default: "/",
		},
	},
};
</script>

<style lang="scss" scoped>
.pill {
	padding: 0.6rem 1.38rem 0.7rem;
	gap: 10px;
	background: var(--light-grey-color);
	border-radius: 7rem;
	font-weight: 600;
	color: var(--black-color);
	margin-right: 0.5rem;
	margin-bottom: 0.5rem;
	text-decoration: none;
	&.nuxt-link-exact-active {
		background: var(--black-color);
		color: var(--white-color);
	}
}
</style>
