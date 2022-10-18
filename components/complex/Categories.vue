<template>
	<div class="categories">
		<ul class="category-pills">
			<Pill
				:value="{
					label: 'All',
					count: 3,
					id: '',
					icon: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgdmlld0JveD0iMCAwIDI4MCAyODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01NC42NjY3IDE1MC42NjdIMTE4LjY2N0MxMjEuNDk2IDE1MC42NjcgMTI0LjIwOSAxNDkuNTQzIDEyNi4yMDkgMTQ3LjU0MkMxMjguMjEgMTQ1LjU0MiAxMjkuMzMzIDE0Mi44MjkgMTI5LjMzMyAxNDBWNTQuNjY2N0MxMjkuMzMzIDUxLjgzNzcgMTI4LjIxIDQ5LjEyNDYgMTI2LjIwOSA0Ny4xMjQyQzEyNC4yMDkgNDUuMTIzOCAxMjEuNDk2IDQ0IDExOC42NjcgNDRINTQuNjY2N0M1MS44Mzc3IDQ0IDQ5LjEyNDYgNDUuMTIzOCA0Ny4xMjQyIDQ3LjEyNDJDNDUuMTIzOCA0OS4xMjQ2IDQ0IDUxLjgzNzcgNDQgNTQuNjY2N1YxNDBDNDQgMTQyLjgyOSA0NS4xMjM4IDE0NS41NDIgNDcuMTI0MiAxNDcuNTQyQzQ5LjEyNDYgMTQ5LjU0MyA1MS44Mzc3IDE1MC42NjcgNTQuNjY2NyAxNTAuNjY3Wk00NCAyMjUuMzMzQzQ0IDIyOC4xNjIgNDUuMTIzOCAyMzAuODc1IDQ3LjEyNDIgMjMyLjg3NkM0OS4xMjQ2IDIzNC44NzYgNTEuODM3NyAyMzYgNTQuNjY2NyAyMzZIMTE4LjY2N0MxMjEuNDk2IDIzNiAxMjQuMjA5IDIzNC44NzYgMTI2LjIwOSAyMzIuODc2QzEyOC4yMSAyMzAuODc1IDEyOS4zMzMgMjI4LjE2MiAxMjkuMzMzIDIyNS4zMzNWMTgyLjY2N0MxMjkuMzMzIDE3OS44MzggMTI4LjIxIDE3Ny4xMjUgMTI2LjIwOSAxNzUuMTI0QzEyNC4yMDkgMTczLjEyNCAxMjEuNDk2IDE3MiAxMTguNjY3IDE3Mkg1NC42NjY3QzUxLjgzNzcgMTcyIDQ5LjEyNDYgMTczLjEyNCA0Ny4xMjQyIDE3NS4xMjRDNDUuMTIzOCAxNzcuMTI1IDQ0IDE3OS44MzggNDQgMTgyLjY2N1YyMjUuMzMzWk0xNTAuNjY3IDIyNS4zMzNDMTUwLjY2NyAyMjguMTYyIDE1MS43OSAyMzAuODc1IDE1My43OTEgMjMyLjg3NkMxNTUuNzkxIDIzNC44NzYgMTU4LjUwNCAyMzYgMTYxLjMzMyAyMzZIMjI1LjMzM0MyMjguMTYyIDIzNiAyMzAuODc1IDIzNC44NzYgMjMyLjg3NiAyMzIuODc2QzIzNC44NzYgMjMwLjg3NSAyMzYgMjI4LjE2MiAyMzYgMjI1LjMzM1YxNTAuNjY3QzIzNiAxNDcuODM4IDIzNC44NzYgMTQ1LjEyNSAyMzIuODc2IDE0My4xMjRDMjMwLjg3NSAxNDEuMTI0IDIyOC4xNjIgMTQwIDIyNS4zMzMgMTQwSDE2MS4zMzNDMTU4LjUwNCAxNDAgMTU1Ljc5MSAxNDEuMTI0IDE1My43OTEgMTQzLjEyNEMxNTEuNzkgMTQ1LjEyNSAxNTAuNjY3IDE0Ny44MzggMTUwLjY2NyAxNTAuNjY3VjIyNS4zMzNaTTE2MS4zMzMgMTE4LjY2N0gyMjUuMzMzQzIyOC4xNjIgMTE4LjY2NyAyMzAuODc1IDExNy41NDMgMjMyLjg3NiAxMTUuNTQyQzIzNC44NzYgMTEzLjU0MiAyMzYgMTEwLjgyOSAyMzYgMTA4VjU0LjY2NjdDMjM2IDUxLjgzNzcgMjM0Ljg3NiA0OS4xMjQ2IDIzMi44NzYgNDcuMTI0MkMyMzAuODc1IDQ1LjEyMzggMjI4LjE2MiA0NCAyMjUuMzMzIDQ0SDE2MS4zMzNDMTU4LjUwNCA0NCAxNTUuNzkxIDQ1LjEyMzggMTUzLjc5MSA0Ny4xMjQyQzE1MS43OSA0OS4xMjQ2IDE1MC42NjcgNTEuODM3NyAxNTAuNjY3IDU0LjY2NjdWMTA4QzE1MC42NjcgMTEwLjgyOSAxNTEuNzkgMTEzLjU0MiAxNTMuNzkxIDExNS41NDJDMTU1Ljc5MSAxMTcuNTQzIDE1OC41MDQgMTE4LjY2NyAxNjEuMzMzIDExOC42NjdaIiBmaWxsPSIjRkQ1OTU2Ii8+Cjwvc3ZnPgo=`,
				}"
				:key="1"
				:routeprefix="routeprefix"
			/>
			<Pill
				:value="category"
				:routeprefix="routeprefix"
				v-for="category in categories"
				:key="category.id"
			/>
		</ul>
		<NuxtChild />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Pill from "~/components/basic/Pill.vue";
import TopBar from "~/components/TopBar.vue";

export default Vue.extend({
	name: "Categories",
	data() {
		return {};
	},
	props: {
		categories: {},
		routeprefix: {
			type: String,
			default: "/",
		},
	},
	components: { TopBar, Pill },
});
</script>

<style lang="scss" scoped>
.categories {
	padding-top: 1.2rem;
	.category-pills {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
	}
}
</style>
