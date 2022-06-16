<template>
	<div
		class="photo"
		:alt="image.text"
		v-bind:style="{
			backgroundImage: 'url(' + image.link + ')',
		}"
	></div>
</template>

<script>
export default {
	name: "Photo",
	props: ["image"],
};
</script>

<style lang="scss" scoped>
.photo {
	height: 22rem;
	width: 100%;
	margin-bottom: 1rem;
	background: var(--light-grey-color);
	border-radius: var(--border-radius);
	background-position: center;
	background-size: cover;
}
</style>
