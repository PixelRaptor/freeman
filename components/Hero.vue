<!-- Please remove this file from your project -->
<template>
	<div class="hero">
		<h1>
			<span class="outline-text">Hello!</span> I am <br />
			Freeman Sibanda
		</h1>
		<p>
			If you are looking for someone to design or develop an enjoyable
			expirience for your next website, mobile or web app? Then am the
			developer you are looking for
		</p>
		<div class="get-intouch">
			<a href="mailto:">Get in touch</a><span>me@ux.dev</span>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "Hero",
});
</script>

<style lang="scss" scoped>
.hero {
	margin-top: 4rem;
	h1 {
		text-align: left;
		font-weight: 700;
		font-size: 2.81rem;
		line-height: 1.3;
		.outline-text {
			font-weight: 600;
			color: transparent;
			-webkit-text-stroke: 1px #333;
			-webkit-text-stroke-color: #000;
		}
	}
	p {
		padding-bottom: 1.93rem;
	}
	.get-intouch {
		text-align: left;
		a {
			font-weight: 700;
			text-decoration-line: underline;
			color: var(--black-color);
		}
		span {
			color: var(--grey-color);
			font-weight: 500;
			margin-left: 1em;
		}
	}
}
</style>
