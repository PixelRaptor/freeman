<template>
	<div @click="$emit('click')" class="back-link">
		<span
			><div class="back-icon">
				<svg
					viewBox="0 0 25 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M22.5 11.25V13.75H7.5L12.5 18.75L11.25 21.25L2.5 12.5L11.25 3.75L12.5 6.25L7.5 11.25H22.5Z"
						fill="black"
					/>
				</svg></div
		></span>
		Go back
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "BackButton",
	props: {
		link: {
			type: String,
		},
		label: {
			type: String,
			default: "Click Me",
		},
	},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.back-link {
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.4;
	padding: 0.3rem 1rem 0.5rem;
	background: rgba(255, 255, 255, 0.5);
	border-radius: 7rem;
	color: var(--black-color);
	text-decoration: none;
	display: inline-flex;
	text-align: left;
	&:active {
		background: var(--black-color);
		color: var(--white-color);
	}
	span {
		display: grid;
		margin-right: 0.3rem;
		.back-icon {
			display: grid;
			svg {
				width: 1.18rem;
				margin: auto;
			}
		}
	}
}
</style>
