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
		<path
			d="M14.704,31.159l66.592,0c0,0 -11.108,61.263 -11.108,61.263l-44.438,-0l-11.046,-61.263Z"
			style="stroke: currentColor; stroke-width: 4px"
		/>
		<path
			d="M15.819,9.273l65.472,12.105"
			style="fill: none; stroke: currentColor; stroke-width: 10px"
		/>
		<path
			d="M42.531,8.44l15.729,2.989"
			style="fill: none; stroke: currentColor; stroke-width: 13px"
		/>
	</svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return {
			title: 'Trash-Icon',
			description: 'This is an icon which show an trash can.',
		}
	},
})
</script>
