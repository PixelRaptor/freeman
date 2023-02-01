<template>
	<a
		:href="disabled ? 'javascript:void(0)' : link"
		:style="{
			pointerEvents: disabled ? 'none' : 'auto',
		}"
		target="_blank"
		rel="external"
		type="text/html"
		hreflang="en"
		>{{ label }}</a
	>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "LinkButton",
	props: {
		link: {
			type: String,
		},
		label: {
			type: String,
			default: "Click Me",
		},
		disabled: {
			type: Boolean,
		},
	},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
	text-decoration: none;
	font-size: 1rem;
	font-weight: 600;
	line-height: 1.5;
	border: none;
	text-align: center;
	color: var(--white-color);
	border-radius: var(--border-radius);
	background: var(--black-color);
	flex: none;
	padding: 0.6rem 1.38rem 0.8rem;
	flex-grow: 1;
	&:hover {
		opacity: 0.8;
		box-shadow: inset 0px 0px 0px 2px var(--black-color);
	}
	&:active {
		box-shadow: inset 0px 0px 0px 2px var(--white-color);
		background-color: var(--white-color);
		color: var(--black-color);
		opacity: 1;
	}
}
</style>
