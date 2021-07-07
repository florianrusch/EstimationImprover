<template>
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 96 96"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xml:space="preserve"
		xmlns:serif="http://www.serif.com/"
		style="
			fill-rule: evenodd;
			clip-rule: evenodd;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-miterlimit: 1.5;
		"
	>
		<title>{{ title }}</title>
		<desc v-if="description">{{ description }}</desc>
		<g>
			<path d="M48,7.5l0,81" style="fill: none; stroke: #000; stroke-width: 10px" />
			<path d="M7.5,48l81,0" style="fill: none; stroke: #000; stroke-width: 10px" />
		</g>
	</svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return {
			title: 'Plus-Icon',
			description: 'This is an icon which show an plus symbol.',
		}
	},
})
</script>

<style scoped>
svg {
	fill: currentColor;
	line-height: 1;
	height: 1em;
	width: 1em;
}
</style>
