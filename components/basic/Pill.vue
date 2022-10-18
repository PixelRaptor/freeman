<template>
	<nuxt-link :to="routeprefix + value.id" class="pill">
		<img class="icon" :src="value.icon" width="15" height="15" />
		<span>{{ value.label }}</span>
	</nuxt-link>
</template>

<script>
export default {
	name: "Pill",
	data() {
		return {
			path: `<path
					d="M216.8 33.5H268L140 254.3L12 33.5H62.56H109.92L140 84.7L169.44 33.5H216.8Z"
					fill="#41B883"
				/>
				<path
					d="M12 33.5L140 254.3L268 33.5H216.8L140 165.98L62.56 33.5H12Z"
					fill="#41B883"
				/>
				<path
					d="M62.56 33.5L140 166.62L216.8 33.5H169.44L140 84.7L109.92 33.5H62.56Z"
					fill="#35495E"
				/>`,
		};
	},
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
	padding: 0.5rem 1.38rem 0.7rem;
	gap: 6px;
	background: var(--light-grey-color);
	border-radius: 7rem;
	font-weight: 600;
	color: var(--black-color);
	margin-right: 0.5rem;
	margin-bottom: 0.5rem;
	text-decoration: none;
	display: inline-flex;
	&.nuxt-link-exact-active {
		background: var(--black-color);
		color: var(--white-color);
	}
	&:hover {
		background: var(--black-color);
		color: var(--white-color);
	}
	&:active {
		background: var(--white-color);
		color: var(--black-color);
	}
	.icon {
		margin: auto;
	}
}
</style>
