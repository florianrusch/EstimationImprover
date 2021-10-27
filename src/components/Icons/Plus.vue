<template>
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 100 100"
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
			<path d="M 50,0 l 0,100" style="fill: none; stroke: currentColor; stroke-width: 10px" />
			<path d="M 0,50 l 100,0" style="fill: none; stroke: currentColor; stroke-width: 10px" />
		</g>
	</svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return {
			title: 'Plus-Icon',
			description: 'This is an icon which shows a plus symbol.',
		}
	},
})
</script>
