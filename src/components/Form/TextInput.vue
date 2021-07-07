<template>
	<div class="flex items-center border-b border-teal-500 py-2">
		<input
			class="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none"
			type="text"
			v-model="inputValue"
			@focusout="onFocusOut"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	props: {
		value: {
			type: String,
			required: false,
		},
	},

	emits: ['change'],

	setup(props, { emit }) {
		const inputValue = ref(props.value)

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const onFocusOut = (event: any) => {
			emit('change', event.target.value)
		}
		return {
			onFocusOut,
			inputValue,
		}
	},
})
</script>
